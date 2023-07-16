import Recipes from '../../core/Recipes'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    recipes.shaped('powah:lens_of_ender', ['PHP', 'VEV', 'PHP'], {
        E: 'powah:ender_core',
        P: 'powah:dielectric_paste',
        V: 'powah:dielectric_rod',
        H: 'powah:dielectric_rod_horizontal',
    })
})
