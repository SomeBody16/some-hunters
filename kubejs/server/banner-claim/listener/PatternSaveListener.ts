import { playerFilter } from '../../../core/event-filter/playerFilter'
import { EventListener } from '../../../core/EventListener'
import { getPlayerDimensionId, title } from '../../util'
import { particle } from '../../util/particle'
import { getBlockBannerPattern } from '../lib/getBannerPattern'
import { PlayerBanner } from '../lib/PlayerBanner'
import { PlayerClaim } from '../lib/PlayerClaim'

export class PatternSaveListener extends EventListener {
    register(): void {
        onEvent(
            'block.right_click',
            playerFilter((event, player) => {
                const dimensionId = getPlayerDimensionId(player.minecraftPlayer)
                if (dimensionId !== 'minecraft:overworld') return

                const blockPattern = getBlockBannerPattern(event.block)
                if (!blockPattern) {
                    return // Not a banner with pattern
                }

                const playerBanner = new PlayerBanner(player)

                if (playerBanner.exists() && !playerBanner.compare(blockPattern)) {
                    title.show(player.profile.name, 'actionbar', 'This is not your pattern!', 'red')
                    return
                }

                if (!playerBanner.exists()) {
                    player.tell(Component.string('Saved as your banner pattern'))
                    playerBanner.save(blockPattern)
                }

                const claim = new PlayerClaim(event.block.pos)
                if (claim.exists()) {
                    title.show(player.profile.name, 'actionbar', 'Already claimed', 'yellow')
                    return
                }

                claim.save(player, event.block.pos)
                title.show(player.profile.name, 'actionbar', 'Chunk claimed', 'green')
                player.playSound('block.amethyst_cluster.place')
                particle.dragonBreath(event.block.pos)
            }),
        )
    }
}
