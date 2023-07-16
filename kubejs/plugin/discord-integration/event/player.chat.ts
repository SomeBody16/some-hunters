import { config } from '../config'
import { executeWebhook, playerAvatarURL } from '../lib'

onEvent(
    'player.chat' as any,
    ((event: { message: string; player: Internal.PlayerJS<any> }) => {
        executeWebhook(config.webhook.chat, {
            content: event.message,
            username: event.player.displayName.string,
            avatar_url: playerAvatarURL(event.player.id),
        })
    }) as any,
)
