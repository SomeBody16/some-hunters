import Recipes from '../../core/Recipes'
import { id } from './common'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    recipes.create
        .mixing([Item.of(id.ciast0, 1), Item.of(id.ciast0, 1).withChance(0.33)], [
            Item.of('create:dough', 3),
            Item.of('minecraft:sugar', 5),
            Fluid.of('minecraft:milk', 1000),
        ] as any)
        .heated()

    recipes.create.mixing([Fluid.of(id.kr3m, 500)], [
        Fluid.of('minecraft:milk', 1000),
        Item.of('minecraft:sugar', 1),
        Item.of('alexsmobs:emu_egg' as any, 3),
        Item.of('create:wheat_flour', 3),
    ] as any)

    recipes.create.mixing([Fluid.of(id.smi3tana, 500)], [
        Fluid.of('minecraft:milk', 1000),
        Item.of('minecraft:sugar', 5),
        Item.of('auxiliaryblocks:orange_gelatin' as any, 1),
    ] as any)

    recipes.create.mixing(
        [
            Item.of(id.krem0wka).withChance(0.25),
            Item.of(id.krem0wka).withChance(0.25),
            Item.of(id.krem0wka).withChance(0.25),
            Item.of(id.krem0wka).withChance(0.25),
            Item.of('create:experience_nugget', 2).withChance(0.25),
        ],
        [Item.of(id.ciast0, 3), Fluid.of(id.kr3m, 1000), Fluid.of(id.smi3tana, 1000)],
    )

    recipes.create
        .mixing(
            [
                Item.of('auxiliaryblocks:orange_gelatin' as any, 1).withChance(0.5),
                Item.of('auxiliaryblocks:orange_gelatin' as any, 1).withChance(0.5),
                Item.of('auxiliaryblocks:orange_gelatin' as any, 1).withChance(0.5),
                Item.of('auxiliaryblocks:orange_gelatin' as any, 1).withChance(0.5),
            ],
            [
                Item.of('minecraft:slime_block', 1),
                Item.of('minecraft:glowstone_dust', 4),
                Fluid.of('create:honey' as any, 1000),
            ],
        )
        .heated()
})
