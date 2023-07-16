import { config } from '../config'
import { playerAvatarURL, serverMessage } from '../lib'

onEvent('command.run', ({ parseResults: { context, reader } }) => {
    try {
        const player = context.source.playerOrException
        if (player.displayName.string === 'SomeBody16_') {
            return
        }
        serverMessage(
            {
                title: `${player.displayName.string} run command`,
                description: `\`\`\`\n${reader.string}\n\`\`\``,
                thumbnail: {
                    url: playerAvatarURL(player.UUID),
                },
            },
            config.webhook.commands,
        )
    } catch (e) {}
})
