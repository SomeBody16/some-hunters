import { EventListener } from '../../../core/EventListener'
import { particle } from '../../util'

export class SpawnParticleListener extends EventListener {
    register(): void {
        onEvent('player.logged_in', ({ player }) => {
            particle.totemOfUndying(player)
        })
        onEvent('player.logged_out' as any, ({ player }: any) => {
            particle.totemOfUndying(player)
        })
    }
}
