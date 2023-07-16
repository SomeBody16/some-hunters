import Recipes from '../../core/Recipes'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    const compressed = (compressedId: string, ingredientId: string) => {
        recipes.shaped(`1x ${compressedId}`, ['III', 'III', 'III'], { I: ingredientId })
        recipes.shaped(`9x ${ingredientId}`, ['I  ', '   ', '   '], { I: compressedId })
    }

    compressed('kubejs:compressed_soul_shard_x1', 'the_vault:soul_shard')
    compressed('kubejs:compressed_soul_shard_x2', 'kubejs:compressed_soul_shard_x1')
    compressed('kubejs:compressed_soul_shard_x3', 'kubejs:compressed_soul_shard_x2')
    compressed('kubejs:compressed_soul_shard_x4', 'kubejs:compressed_soul_shard_x3')
})
