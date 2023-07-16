import { particle } from '../../server/util'
import { id, randMessage } from './common'

const runRandom = (chance: number, effect: () => void) => {
    const rand = Math.random()
    if (rand <= chance) {
        effect()
    }
}

onEvent('item.registry', (event) => {
    event
        .create(id.ciast0)
        .displayName('§fCiast0')
        .texture('farmersdelight:item/wheat_dough' as any)

    event
        .create(id.krem0wka)
        .displayName('§aKrem0wka')
        .tooltip('§7ID: 2137' as any)
        .food((food) => {
            food.hunger(3) //
                .saturation(4)
                .meat()
                .eaten((ctx) => {
                    runRandom(0.1, () => {
                        Utils.server.runCommand(
                            `execute as ${ctx.player.name} run say ${randMessage()}`,
                        )
                    })
                    runRandom(0.1, () => {
                        ctx.player.tell(Component.green('Papieżegen activated'))
                        particle.totemOfUndying(ctx.player, ctx.player.level.dimension.toString())
                        ctx.player.potionEffects.add('regeneration', 5, 3)
                    })
                    runRandom(0.1, () => {
                        ctx.player.tell(Component.red('Papieżowamoc activated'))
                        particle.totemOfUndying(ctx.player, ctx.player.level.dimension.toString())
                        ctx.player.potionEffects.add('strength', 120, 5)
                    })
                    runRandom(0.1, () => {
                        ctx.player.tell(Component.lightPurple('Papieżowa szybkość activated'))
                        particle.totemOfUndying(ctx.player, ctx.player.level.dimension.toString())
                        ctx.player.potionEffects.add('speed', 120, 5)
                    })
                })
        })
})

onEvent('fluid.registry', (event) => {
    const kremColor: any = 0xaaaaaa
    const smietanaColor: any = 0xcccccc

    event //
        .create(id.kr3m)
        .thinTexture(kremColor)
        .bucketColor(kremColor)
        .displayName('§fKr3m')

    event //
        .create(id.smi3tana)
        .thinTexture(smietanaColor)
        .bucketColor(smietanaColor)
        .displayName('§fŚmi3tana')
})
