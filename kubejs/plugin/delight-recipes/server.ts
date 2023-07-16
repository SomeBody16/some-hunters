import Recipes from '../../core/Recipes'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    recipes.remove({ type: 'farmersdelight:cutting' })
})
