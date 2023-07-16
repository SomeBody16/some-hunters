import Recipes from '../../core/Recipes'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    // recipes.shaped('sophisticatedbackpacks:smelting_upgrade', ['CCC', 'CBC', 'CSC'], {
    //     B: 'sophisticatedbackpacks:upgrade_base',
    //     C: compressium.cobblestone.x3,
    //     S: theVault.gem.larimar.perfect,
    // })
    // recipes.shaped('sophisticatedbackpacks:auto_smelting_upgrade', ['GGG', 'SBS', 'RLR'], {
    //     B: 'sophisticatedbackpacks:smelting_upgrade',
    //     G: compressium.gold.x3,
    //     R: compressium.redstone.x3,
    //     L: theVault.gem.larimar.perfect,
    // })

    // recipes.shaped('sophisticatedbackpacks:smoking_upgrade', ['SWS', 'WBW', 'SWS'], {
    //     B: 'sophisticatedbackpacks:smelting_upgrade',
    //     C: 'minecraft:oak_wood',
    //     S: theVault.gem.larimar.perfect,
    // })
    // recipes.shaped('sophisticatedbackpacks:auto_smoking_upgrade', ['GGG', 'SBS', 'RLR'], {
    //     B: 'sophisticatedbackpacks:smoking_upgrade',
    //     C: compressium.gold.x3,
    //     R: compressium.redstone.x3,
    //     L: theVault.gem.larimar.perfect,
    // })

    // recipes.shaped('sophisticatedbackpacks:blasting_upgrade', ['SWS', 'WBW', 'SWS'], {
    //     B: 'sophisticatedbackpacks:smelting_upgrade',
    //     C: 'minecraft:iron_block',
    //     S: theVault.gem.larimar.perfect,
    // })
    // recipes.shaped('sophisticatedbackpacks:auto_blasting_upgrade', ['GGG', 'SBS', 'RLR'], {
    //     B: 'sophisticatedbackpacks:blasting_upgrade',
    //     C: compressium.gold.x3,
    //     R: compressium.redstone.x3,
    //     L: theVault.gem.larimar.perfect,
    // })

    // recipes.shaped('sophisticatedbackpacks:stonecutter_upgrade', ['DID', 'CBC', 'CSC'], {
    //     B: 'sophisticatedbackpacks:upgrade_base',
    //     C: compressium.cobblestone.x3,
    //     I: compressium.iron.x3,
    //     S: theVault.gem.larimar.perfect,
    //     D: theVault.diamond,
    // })

    // recipes.shaped('sophisticatedbackpacks:jukebox_upgrade', ['DDD', 'LBL', 'VVV'], {
    //     B: 'sophisticatedbackpacks:upgrade_base',
    //     D: compressium.diamond.x1,
    //     L: theVault.gem.larimar.perfect,
    //     V: theVault.diamond,
    // })

    // recipes.shaped('sophisticatedbackpacks:battery_upgrade', ['LPL', 'SBS', 'VVV'], {
    //     B: 'sophisticatedbackpacks:upgrade_base',
    //     L: theVault.gem.larimar.perfect,
    //     P: 'powah:battery_starter',
    //     S: theVault.chromatic.steel,
    //     V: theVault.diamond,
    // })
})
