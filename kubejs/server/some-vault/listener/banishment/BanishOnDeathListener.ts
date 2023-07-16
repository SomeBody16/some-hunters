import { playerFilter } from '../../../../core/event-filter/playerFilter'
import { EventListener } from '../../../../core/EventListener'
import { getPlayerDimensionId } from '../../../util'
import { isBanDimenstion } from '../../config'
import { Banishment } from '../../lib/Banishment'

export class BanishOnDeathListener extends EventListener {
    register(): void {
        onEvent(
            'entity.death' as any,
            playerFilter(({ server }, player) => {
                const dimensionId = getPlayerDimensionId(player.minecraftPlayer)

                if (isBanDimenstion(dimensionId)) {
                    server.scheduleInTicks(1, player, (callback) => {
                        const banishment = new Banishment(callback.data.player)
                        banishment.nextBan()
                        return
                    })
                }
            }),
        )
    }
}
