import Recipes from '../../core/Recipes'
import { theVault } from '../the_vault/id'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    recipes.remove({ output: 'engineersdecor:small_solar_panel' })

    recipes.changeToShaped({
        output: 'engineersdecor:factory_hopper',
        pattern: ['ABC', 'DE ', '   '],
        ingredients: {
            A: 'engineersdecor:metal_bar',
            B: 'the_vault:chromatic_steel_block',
            C: 'minecraft:hopper',
            D: theVault.gem.pog,
            E: theVault.chromatic.steel,
        },
    })
})
