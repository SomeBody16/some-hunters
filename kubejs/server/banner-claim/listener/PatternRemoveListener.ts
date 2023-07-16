import { playerFilter } from '../../../core/event-filter/playerFilter'
import { EventListener } from '../../../core/EventListener'
import { getPlayerDimensionId, title } from '../../util'
import { particle } from '../../util/particle'
import { getBlockBannerPattern } from '../lib/getBannerPattern'
import { PlayerClaim } from '../lib/PlayerClaim'

export class PatternRemoveListener extends EventListener {
    register(): void {
        onEvent(
            'block.break',
            playerFilter((event, player) => {
                const dimensionId = getPlayerDimensionId(player.minecraftPlayer)
                if (dimensionId !== 'minecraft:overworld') return

                const blockPattern = getBlockBannerPattern(event.block)
                if (!blockPattern) {
                    return // Not a banner with pattern
                }

                const claim = new PlayerClaim(event.block.pos)
                if (!claim.exists() || !claim.havePermissions(player)) {
                    return
                }

                if (claim.remove(event.block.pos)) {
                    title.show(player.profile.name, 'actionbar', 'Claim removed', 'red')
                    player.playSound('block.amethyst_cluster.break')
                    particle.dragonBreath(event.block.pos)
                }
            }),
        )
    }
}
