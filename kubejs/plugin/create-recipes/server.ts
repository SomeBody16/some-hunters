import Recipes from '../../core/Recipes'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    recipes.create.compacting(Item.of('create:experience_nugget'), [
        Fluid.of('create_enchantment_industry:experience' as any, 3),
    ])

    recipes.create
        .mixing(
            [Item.of('mekanism:dust_steel' as any)],
            [Item.of('minecraft:iron_ingot'), Item.of('minecraft:coal', 2)],
        )
        .superheated()

    recipes.create.crushing(
        [
            Item.of('minecraft:bone_meal', 3),
            Item.of('minecraft:black_dye', 1).withChance(0.25),
            Item.of('minecraft:bone_meal', 3).withChance(0.25),
        ],
        Item.of('architects_palette:withered_bone' as any),
    )

    recipes.create.mixing(
        [
            //
            Item.of('create:creative_motor', 1),
        ],
        [
            Item.of('create:steam_engine', 1),
            Item.of('compressium:iron_4' as any, 1),
            Item.of('create:rotation_speed_controller', 1),
            Item.of('create_things_and_misc:vibration_mechanism' as any, 3),
            Item.of('the_vault:vault_relic_fragment' as any, 1, {
                VaultModelId: 'the_vault:relic/dragon/frag1',
            }),
            Item.of('the_vault:gem_echo' as any, 1),
            //
            Fluid.of('createbb:liquid_blue_methamphetamine' as any, 500),
            Fluid.of('create:chocolate' as any, 500),
        ],
    )

    recipes.create.compacting(Item.of('createbb:nitrogen' as any).withChance(0.1), [
        Item.of('#forge:vegetables' as any, 4),
    ])
})
