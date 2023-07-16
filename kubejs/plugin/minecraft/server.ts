onEvent('entity.loot_tables', (event) => {
    event.modifyEntity('minecraft:piglin_brute' as any, (table) => {
        table.addPool((pool: any) => {
            pool.addItem('farmersdelight:ham', 1)
            pool.addItem('farmersdelight:bacon', 1)
        })
    })
    event.modifyEntity('minecraft:ender_dragon' as any, (table) => {
        table.addPool((pool: any) => {
            pool.addItem('minecraft:chorus_flower', 1)
            pool.addItem('minecraft:chorus_fruit', 1)
            pool.addItem('create:experience_nugget', 1)
        })
    })
    event.modifyEntity('minecraft:mooshroom' as any, (table) => {
        table.addPool((pool: any) => {
            pool.addItem('minecraft:brown_mushroom', 1)
            pool.addItem('minecraft:red_mushroom', 1)
            pool.addItem('botania:white_mushroom', 1)
            pool.addItem('botania:orange_mushroom', 1)
            pool.addItem('botania:magenta_mushroom', 1)
            pool.addItem('botania:light_blue_mushroom', 1)
            pool.addItem('botania:yellow_mushroom', 1)
            pool.addItem('botania:lime_mushroom', 1)
            pool.addItem('botania:pink_mushroom', 1)
            pool.addItem('botania:gray_mushroom', 1)
            pool.addItem('botania:light_gray_mushroom', 1)
            pool.addItem('botania:cyan_mushroom', 1)
            pool.addItem('botania:purple_mushroom', 1)
            pool.addItem('botania:blue_mushroom', 1)
            pool.addItem('botania:brown_mushroom', 1)
            pool.addItem('botania:green_mushroom', 1)
            pool.addItem('botania:red_mushroom', 1)
            pool.addItem('botania:black_mushroom', 1)
        })
    })
})
