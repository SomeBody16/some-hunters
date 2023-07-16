import Recipes from '../../core/Recipes'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    recipes.changeToShaped({
        output: 'darkutils:vector_plate_ultra',
        pattern: ['PPP', 'BBB', 'PPP'],
        ingredients: {
            P: 'darkutils:vector_plate_extreme',
            B: 'darkutils:blank_plate',
        },
        outputCount: 12,
    })
})
