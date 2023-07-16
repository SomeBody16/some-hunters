import Recipes from '../../core/Recipes'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    recipes.create.mixing(
        [
            Item.of('botania:cell_block' as any).withChance(0.5),
            Item.of('botania:cell_block' as any).withChance(0.5),
            Item.of('botania:cell_block' as any).withChance(0.5),
            Item.of('botania:cell_block' as any).withChance(0.5),
        ],
        [
            //
            Item.of('minecraft:cactus'),
            Item.of('minecraft:cactus'),
            Item.of('minecraft:cactus'),
            Item.of('minecraft:beetroot'),
            Item.of('minecraft:carrot'),
            Item.of('minecraft:potato'),
        ],
    )
})
