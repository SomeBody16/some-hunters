import Recipes from '../../core/Recipes'

onEvent('item.tags', (event) => {
    event.add('curios:curio', 'the_vault:vault_charm')
    event.add('curios:curio', 'sophisticatedbackpacks:backpack')
    event.add('curios:curio', 'sophisticatedbackpacks:iron_backpack')
    event.add('curios:curio', 'sophisticatedbackpacks:gold_backpack')
    event.add('curios:curio', 'sophisticatedbackpacks:diamond_backpack')
    event.add('curios:curio', 'sophisticatedbackpacks:netherite_backpack')
})

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    recipes.remove({ output: 'the_vault:vault_alloy' })

    recipes.shaped('5x the_vault:vault_alloy', ['ABA', 'BCB', 'ABA'], {
        A: 'the_vault:vault_ingot',
        B: 'the_vault:chromatic_steel_nugget',
        C: 'the_vault:chromatic_steel_ingot',
    })

    recipes.shapeless('the_vault:vault_alloy', [
        'the_vault:vaulterite_ingot',
        'the_vault:vaulterite_ingot',
    ])
})
