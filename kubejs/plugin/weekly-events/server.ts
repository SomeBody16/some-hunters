import { events, Events } from './event'
import { registerCommand } from './util/registerCommand'

registerCommand({
    runIf([cmd, eventType, action], player) {
        return (
            cmd === '!event' &&
            Object.keys(events).includes(eventType) &&
            ['start', 'end'].includes(action)
        )
    },
    execute([cmd, eventType, action], player) {
        const { event }: Events[number] = (events as any)[eventType]
        if (action === 'start') {
            event.onStart()
        }
        if (action === 'end') {
            event.onEnd()
        }
    },
})

onEvent('command.registry', (event) => {
    const { commands: Commands, arguments: Arguments } = event as any
    event.register(
        //
        Commands.literal('event') //
            .requires((src: any) => src.hasPermission(2))
            .then(
                //
                Commands.argument('name', Arguments.STRING.create(event)) //
                    .then(
                        //
                        Commands.literal('start').executes((ctx: any) => {
                            const name = Arguments.STRING.getResult(ctx, 'name')
                            if (!Object.keys(events).includes(name)) {
                                return 0
                            }

                            const { event }: Events[number] = (events as any)[name]
                            event.onStart()
                            return 1
                        }),
                    )
                    .then(
                        //
                        Commands.literal('end').executes((ctx: any) => {
                            const name = Arguments.STRING.getResult(ctx, 'name')
                            if (!Object.keys(events).includes(name)) {
                                return 0
                            }

                            const { event }: Events[number] = (events as any)[name]
                            event.onEnd()
                            return 1
                        }),
                    ),
            ),
    )
})
