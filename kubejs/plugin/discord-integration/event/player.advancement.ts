import { playerAvatarURL, serverMessage } from '../lib'

onEvent(
    'player.advancement' as any,
    ((event: { player: Internal.PlayerJS<any>; advancement: Internal.AdvancementJS }) => {
        serverMessage({
            color: 0x00ff00,
            title: `${event.player.displayName.string} has made the advancement`,
            description: `
                \`\`\`css\n${event.advancement.displayText.string}\n\`\`\`
                *${event.advancement.description.string.trim()}*
            `,
            thumbnail: {
                url: playerAvatarURL(event.player.id),
            },
        })
    }) as any,
)
