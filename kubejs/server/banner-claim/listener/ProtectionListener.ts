import { playerFilter } from '../../../core/event-filter/playerFilter'
import { EventListener } from '../../../core/EventListener'
import { getPlayerDimensionId, particle, title } from '../../util'
import { blacklist, publicBlocks } from '../config'
import { PlayerClaim } from '../lib/PlayerClaim'

export class ProtectionListener extends EventListener {
    register(): void {
        onEvent(
            'block.right_click',
            playerFilter((event, player) => {
                const dimensionId = getPlayerDimensionId(player.minecraftPlayer)
                if (dimensionId !== 'minecraft:overworld') return

                const isBlockBlacklisted = blacklist.right_click.reduce(
                    (prev, curr) => prev || curr.test(event.block.id),
                    false,
                )
                if (!isBlockBlacklisted) {
                    return
                }

                const claim = new PlayerClaim(event.block)
                if (!claim.havePermissions(player) && !this.isPublic(event.level, event.block)) {
                    this.punish(player)
                    particle.dragonBreath(event.block)
                    event.cancel()
                    return
                }
            }),
        )

        onEvent(
            'block.break',
            playerFilter((event, player) => {
                const dimensionId = getPlayerDimensionId(player.minecraftPlayer)
                if (dimensionId !== 'minecraft:overworld') return

                const claim = new PlayerClaim(event.block)
                if (claim.havePermissions(player)) {
                    return
                }

                this.punish(player)
                particle.dragonBreath(event.block)
                event.cancel()
            }),
        )

        onEvent(
            'block.place',
            playerFilter((event, player) => {
                const dimensionId = getPlayerDimensionId(player.minecraftPlayer)
                if (dimensionId !== 'minecraft:overworld') return

                const claim = new PlayerClaim(event.block)
                if (!claim.exists() || claim.havePermissions(player)) {
                    return
                }

                if (publicBlocks.includes(event.block.id)) {
                    this.punish(player)
                    particle.dragonBreath(event.block)
                    event.cancel()
                }
            }),
        )
    }

    punish(player: Internal.PlayerJS<any>) {
        title.show(player.profile.name, 'actionbar', 'Fuck off', 'purple')
    }

    protected isPublic(level: Internal.LevelJS, pos: { x: number; y: number; z: number }): boolean {
        const toCheck = [
            [pos.x, pos.y - 1, pos.z], // bottom
            [pos.x, pos.y + 1, pos.z], // top
            [pos.x, pos.y, pos.z - 1], // behind
            [pos.x, pos.y, pos.z + 1], // front
            [pos.x - 1, pos.y, pos.z], // left
            [pos.x + 1, pos.y, pos.z], // right
        ]

        for (let i = 0; i < toCheck.length; i++) {
            const [x, y, z] = toCheck[i]
            const block = level.getBlock(x, y, z)
            if (publicBlocks.includes(block.id)) {
                return true
            }
        }
        return false
    }
}
