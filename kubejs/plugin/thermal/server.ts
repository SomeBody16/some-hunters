import Recipes from '../../core/Recipes'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    recipes.custom({
        type: 'thermal:insolator',
        ingredient: {
            item: 'minecraft:spore_blossom',
        },
        result: [
            {
                item: 'minecraft:spore_blossom',
                chance: 2.0,
            },
        ],
        energy_mod: 1.5,
        water_mod: 1.5,
    })

    recipes.custom({
        type: 'thermal:insolator',
        ingredient: {
            item: 'ecologics:coconut_seedling',
        },
        result: [
            {
                item: 'ecologics:coconut_seedling',
                chance: 2.0,
            },
            {
                item: 'ecologics:coconut_log',
                chance: 5.0,
            },
            {
                item: 'ecologics:coconut_leaves',
                chance: 0.5,
            },
            {
                item: 'ecologics:coconut_slice',
                chance: 0.1,
            },
        ],
        energy_mod: 1.5,
        water_mod: 1.5,
    })
    ;['blue', 'purple', 'green', 'red'].forEach((color) => {
        const sapling = `ars_nouveau:${color}_archwood_sapling`
        const log = `ars_nouveau:${color}_archwood_log`
        const leaves = `ars_nouveau:${color}_archwood_leaves`

        recipes.custom({
            type: 'thermal:insolator',
            ingredient: {
                item: sapling,
            },
            result: [
                {
                    item: sapling,
                    chance: 2.0,
                },
                {
                    item: log,
                    chance: 5.0,
                },
                {
                    item: leaves,
                    chance: 0.5,
                },
            ],
            energy_mod: 1.5,
            water_mod: 1.5,
        })
    })

    recipes.changeToShaped({
        output: 'thermal:phytogro',
        outputCount: 8,
        pattern: ['SA ', 'AN ', '   '],
        ingredients: {
            S: 'minecraft:sand',
            A: 'thermal:apatite',
            N: 'thermal:niter',
        },
    })

    recipes.changeToShaped({
        output: 'thermal:phytogro',
        outputCount: 9,
        pattern: ['SB ', 'BN ', '   '],
        ingredients: {
            S: 'minecraft:sand',
            N: 'minecraft:gunpowder',
            B: 'minecraft:bone_block',
        },
    })

    // Object.keys(FLUID).forEach((fluidId) => {
    //     console.log({
    //         type: 'thermal:pyrolyzer',
    //         ingredient: {
    //             item: `thermal:${fluidId}_bucket`,
    //         },
    //         result: [
    //             {
    //                 item: 'minecraft:bucket',
    //             },
    //             {
    //                 fluid: `kubejs:${fluidId}_decorative`,
    //                 amount: 1000,
    //             },
    //         ],
    //         experience: 0.15,
    //     })
    //     recipes.custom({
    //         type: 'thermal:pyrolyzer',
    //         ingredient: {
    //             item: `thermal:${fluidId}_bucket`,
    //         },
    //         result: [
    //             {
    //                 item: 'minecraft:bucket',
    //             },
    //             {
    //                 fluid: `kubejs:${fluidId}_decorative`,
    //                 amount: 1000,
    //             },
    //         ],
    //         experience: 0.15,
    //     })
    // })

    // recipes.custom({
    //     type: 'thermal:bottler',
    //     ingredients: [
    //         {
    //             item: 'minecraft:sand',
    //         },
    //         {
    //             fluid: 'thermal:creosote',
    //             amount: 1000,
    //         },
    //     ],
    //     result: [
    //         {
    //             item: 'thermal:oil_sand',
    //         },
    //     ],
    //     energy: 2000,
    // })
})
