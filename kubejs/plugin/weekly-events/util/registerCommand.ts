export type RegisterCommandProps = {
    runIf: (args: string[], player: Internal.PlayerJS<any>) => boolean
    execute: (args: string[], player: Internal.PlayerJS<any>) => void
}

export const registerCommand = (props: RegisterCommandProps) =>
    onEvent('player.chat' as any, (event: any) => {
        const args: string[] = event.message.trim().split(' ')
        if (!props.runIf(args, event.player)) {
            return
        }

        event.cancel()
        props.execute(args, event.player)
    })
