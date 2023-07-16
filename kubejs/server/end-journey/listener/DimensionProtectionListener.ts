import { EventListener } from '../../../core/EventListener'
import { getPlayerDimensionId } from '../../util'

export class DimensionProtectionListener extends EventListener {
    register(): void {
        onEvent('player.tick', ({ player, minecraftPlayer }) => {
            const dimensionId = getPlayerDimensionId(minecraftPlayer)

            if (!this.isPlayerAllowed(player, dimensionId) && player.isAlive()) {
                player.kill()
                this.emitProtectionMessage(player)
                return
            }
        })
    }

    emitProtectionMessage(player: Internal.PlayerJS<any>) {
        const message = Component.join(Component.string(''), [
            Component.string('Hey '),
            Component.string(player.profile.name).darkGreen(),
            Component.string('! Please follow the '),
            Component.string('End Journey').darkPurple(),
            Component.string(' quests. lol'),
        ] as any)
        player.server.tell(message)
    }

    isPlayerAllowed(player: Internal.PlayerJS<any>, dimensionId: string) {
        switch (true) {
            case dimensionId === 'minecraft:the_nether':
                return player.tags.contains('OverworldCompleted')
            case dimensionId === 'minecraft:the_end':
                return player.tags.contains('NetherCompleted')
            case dimensionId.includes('the_vault'):
                return player.tags.contains('EndCompleted')
            default:
                return true
        }
    }
}
