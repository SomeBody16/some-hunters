import { playerAvatarURL, serverMessage } from '../lib'

onEvent('player.logged_in', (event) => {
    serverMessage({
        color: 0xffff00,
        title: `${event.player.displayName.string} joined`,
        thumbnail: {
            url: playerAvatarURL(event.player.id),
        },
    })
})

onEvent('player.logged_out' as any, (event: { player: Internal.PlayerJS<any> }) => {
    serverMessage({
        color: 0xff0000,
        title: `${event.player.displayName.string} left`,
        thumbnail: {
            url: playerAvatarURL(event.player.id),
        },
    })
})
