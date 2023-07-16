import Recipes from '../../core/Recipes'
import { compressium } from '../compressium/id'
import { theVault } from '../the_vault/id'
import { id } from './id'

onEvent('recipes', (event) => {
    const recipes = new Recipes(event)

    recipes.remove({ output: 'computercraft:turtle_normal' })
    recipes.remove({ output: 'computercraft:turtle_advanced' })

    recipes.changeToShaped({
        output: id.crafting.antenna,
        pattern: [' CB', ' AC', 'A  '],
        ingredients: {
            A: id.crafting.metalPlate,
            B: id.crafting.metalWire,
            C: 'architects_palette:ender_pearl_block',
        },
    })

    recipes.changeToShaped({
        output: id.crafting.display,
        pattern: ['AAA', 'ABA', 'AAA'],
        ingredients: {
            A: 'minecraft:glass',
            B: theVault.gem.larimar.perfect,
        },
    })

    recipes.changeToShaped({
        output: id.crafting.lense,
        pattern: ['ABA', 'A A', 'ABA'],
        ingredients: {
            A: id.crafting.metalPlate,
            B: theVault.gem.larimar.perfect,
        },
    })

    recipes.changeToShaped({
        output: id.crafting.magneticDisk,
        pattern: [' B ', 'BAB', ' B '],
        ingredients: {
            A: theVault.magnetite,
            B: id.crafting.metalPlate,
        },
    })

    recipes.changeToShaped({
        output: id.crafting.metalPlate,
        outputCount: 4,
        pattern: ['AA ', '   ', '   '],
        ingredients: {
            A: theVault.chromatic.steel,
        },
    })

    recipes.changeToShaped({
        output: id.crafting.metalWire,
        outputCount: 4,
        pattern: [' A ', ' B ', ' A '],
        ingredients: {
            A: id.crafting.woodenBoard,
            B: id.crafting.metalPlate,
        },
    })

    recipes.changeToShaped({
        output: id.crafting.woodenBoard,
        pattern: ['   ', ' A ', ' A '],
        ingredients: {
            A: theVault.driftwoodPlanks,
        },
    })

    recipes.changeToShaped({
        output: id.computer.normal,
        pattern: ['AAA', 'ABA', 'ACA'],
        ingredients: {
            A: id.crafting.metalPlate,
            B: compressium.redstone.x2,
            C: id.crafting.display,
        },
    })

    recipes.changeToShaped({
        output: id.computer.advanced,
        pattern: ['AAA', 'ABA', 'ACA'],
        ingredients: {
            A: 'minecraft:gold_block',
            B: id.computer.normal,
            C: theVault.mysticalEssence,
        },
    })

    recipes.changeToShaped({
        output: id.computer.pocket.normal,
        pattern: ['AB ', '   ', '   '],
        ingredients: {
            A: id.computer.normal,
            B: 'minecraft:golden_apple',
        },
    })

    recipes.changeToShaped({
        output: id.computer.pocket.advanced,
        pattern: ['AAA', 'ABA', 'ACA'],
        ingredients: {
            A: 'minecraft:gold_block',
            B: id.computer.pocket.normal,
            C: theVault.mysticalEssence,
        },
    })

    recipes.changeToShaped({
        output: id.speaker,
        pattern: ['AAA', 'ABA', 'ACA'],
        ingredients: {
            A: id.crafting.metalPlate,
            B: 'minecraft:note_block',
            C: compressium.redstone.x1,
        },
    })

    recipes.changeToShaped({
        output: id.disk_drive,
        pattern: ['AAA', 'ABA', 'ABA'],
        ingredients: {
            A: id.crafting.metalPlate,
            B: compressium.redstone.x1,
        },
    })

    recipes.changeToShaped({
        output: id.printer,
        pattern: ['AAA', 'ABA', 'ACA'],
        ingredients: {
            A: 'compressium:stone_2',
            B: 'minecraft:redstone_block',
            C: '#forge:dyes',
        },
    })

    recipes.changeToShaped({
        output: id.monitor.normal,
        outputCount: 2,
        pattern: ['AAA', 'ABA', 'AAA'],
        ingredients: {
            A: 'compressium:stone_2',
            B: id.crafting.display,
        },
    })

    recipes.changeToShaped({
        output: id.monitor.advanced,
        pattern: ['AAA', 'ABA', 'AAA'],
        ingredients: {
            A: 'minecraft:gold_block',
            B: id.monitor.normal,
        },
    })

    recipes.changeToShaped({
        output: id.modem.normal,
        pattern: ['AAA', 'ABA', 'AAA'],
        ingredients: {
            A: id.crafting.metalPlate,
            B: id.crafting.antenna,
        },
    })

    recipes.changeToShaped({
        output: id.modem.advanced,
        pattern: ['AAA', 'ABA', 'AAA'],
        ingredients: {
            A: 'minecraft:gold_block',
            B: id.modem.normal,
        },
    })

    recipes.changeToShaped({
        output: id.modem.wired.base,
        pattern: ['AAA', 'ABA', 'AAA'],
        ingredients: {
            A: id.crafting.metalPlate,
            B: compressium.redstone.x1,
        },
    })

    recipes.changeToShaped({
        output: id.modem.cable,
        outputCount: 8,
        pattern: [' A ', 'ABA', ' A '],
        ingredients: {
            A: id.crafting.metalWire,
            B: compressium.redstone.x1,
        },
    })
})
