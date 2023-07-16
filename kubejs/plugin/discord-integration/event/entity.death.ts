import { playerAvatarURL, serverMessage } from '../lib'

onEvent(
    'entity.death' as any,
    ((event: { entity: Internal.EntityJS; source: Internal.DamageSource }) => {
        if (!event?.entity?.isPlayer()) {
            return
        }
        const player = event.entity.player

        serverMessage({
            color: 0x000001,
            title: event.source.getLocalizedDeathMessage(player.getMinecraftEntity() as any).string,
            thumbnail: {
                url: playerAvatarURL(player.id),
            },
        })
    }) as any,
)
