import { EventListener } from '../../../../core/EventListener'
import { Banishment } from '../../lib/Banishment'

export class LoginCheckBanishmentListener extends EventListener {
    register(): void {
        onEvent('player.logged_in', ({ player }) => {
            const banEntry = new Banishment(player)
            banEntry.isBanned() && banEntry.kick()
        })
    }
}
