import { EventListener } from '../../../core/EventListener'
import Recipes from '../../../core/Recipes'

const vault = {
    larimarGem: 'the_vault:gem_larimar',
    larimarPerfect: 'the_vault:perfect_larimar',
    driftwood: 'the_vault:driftwood',
    silverScrap: 'the_vault:silver_scrap',
    pog: 'the_vault:gem_pog',
    vaultScrap: 'the_vault:vault_scrap',
    hunterEye: 'the_vault:hunter_eye',
    magnetiteIngot: 'the_vault:magnetite_ingot',
    plating: 'the_vault:vault_plating',
    chromaticIron: 'the_vault:chromatic_iron_ingot',
    chromaticSteel: 'the_vault:chromatic_steel_ingot',
    magicSilk: 'the_vault:magic_silk',
    polishedStone: 'the_vault:polished_vault_stone',
}

const cctv = {
    display: 'kubejs:cc_display',
    magneticDisk: 'kubejs:cc_magnetic_coated_disk',
    metalWire: 'kubejs:cc_metal_wire',
    lense: 'kubejs:cc_lense',
    metalPlate: 'kubejs:cc_metal_plate',
    woodenBoard: 'kubejs:cc_wooden_board',
    antenna: 'kubejs:cc_antenna',
}

const compressium = {
    redstoneX1: 'compressium:redstone_1',
}

export class RecipesListener extends EventListener {
    register(): void {
        onEvent('recipes', (event) => {
            const recipes = new Recipes(event)

            recipes.remove({ output: 'computercraft:turtle_normal' })
            recipes.remove({ output: 'computercraft:turtle_advanced' })

            this.ingredients(recipes)
            this.recipes(recipes)
        })
    }

    recipes(recipes: Recipes) {
        recipes.changeToShaped({
            output: 'computercraft:computer_normal',
            pattern: ['SSS', 'SRS', 'SDS'],
            ingredients: {
                S: cctv.metalPlate,
                R: compressium.redstoneX1,
                D: cctv.display,
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:computer_advanced',
            pattern: ['GGG', 'GCG', 'GLG'],
            ingredients: {
                G: 'minecraft:gold_block',
                C: 'computercraft:computer_normal',
                L: vault.larimarPerfect,
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:pocket_computer_normal',
            pattern: ['CG ', '   ', '   '],
            ingredients: {
                C: 'computercraft:computer_normal',
                G: 'minecraft:golden_apple',
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:pocket_computer_advanced',
            pattern: ['CG ', '   ', '   '],
            ingredients: {
                C: 'computercraft:computer_advanced',
                G: 'minecraft:golden_apple',
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:speaker',
            pattern: ['SSS', 'SNS', 'SRS'],
            ingredients: {
                S: cctv.metalPlate,
                N: 'minecraft:note_block',
                R: compressium.redstoneX1,
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:disk_drive',
            pattern: ['SSS', 'SDS', 'SRS'],
            ingredients: {
                S: cctv.metalPlate,
                D: cctv.magneticDisk,
                R: compressium.redstoneX1,
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:printer',
            pattern: ['SSS', 'SIS', 'SRS'],
            ingredients: {
                S: cctv.metalPlate,
                I: 'minecraft:ink_sac',
                R: compressium.redstoneX1,
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:monitor_normal',
            outputCount: 4,
            pattern: ['SSS', 'SDS', 'SSS'],
            ingredients: {
                S: cctv.metalPlate,
                D: cctv.display,
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:monitor_advanced',
            outputCount: 4,
            pattern: ['GGG', 'GMG', 'GGG'],
            ingredients: {
                G: 'minecraft:gold_block',
                M: 'computercraft:monitor_normal',
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:wireless_modem_normal',
            pattern: ['MMM', 'MAM', 'MMM'],
            ingredients: {
                M: cctv.metalPlate,
                A: cctv.antenna,
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:wireless_modem_advanced',
            pattern: ['GGG', 'GMG', 'GGG'],
            ingredients: {
                G: 'minecraft:gold_block',
                M: 'computercraft:wireless_modem_normal',
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:cable',
            outputCount: 4,
            pattern: [' W ', 'WRW', ' W '],
            ingredients: {
                W: cctv.metalWire,
                R: 'minecraft:redstone',
            },
        })

        recipes.changeToShaped({
            output: 'computercraft:wired_modem',
            pattern: ['MMM', 'MRM', 'MMM'],
            ingredients: {
                M: cctv.metalPlate,
                R: compressium.redstoneX1,
            },
        })
    }

    ingredients(recipes: Recipes) {
        recipes.changeToShaped({
            output: cctv.metalWire,
            outputCount: 4,
            pattern: ['B  ', 'P  ', 'B  '],
            ingredients: {
                B: cctv.woodenBoard,
                P: cctv.metalPlate,
            },
        })

        recipes.changeToShaped({
            output: cctv.display,
            outputCount: 2,
            pattern: ['III', 'ILI', 'III'],
            ingredients: {
                I: vault.chromaticIron,
                L: vault.larimarGem,
            },
        })

        recipes.changeToShaped({
            output: cctv.magneticDisk,
            pattern: [' I ', 'IRI', ' I '],
            ingredients: {
                I: vault.chromaticIron,
                R: vault.magnetiteIngot,
            },
        })

        recipes.changeToShaped({
            output: cctv.lense,
            pattern: ['IGI', 'III', 'IGI'],
            ingredients: {
                I: vault.chromaticIron,
                G: vault.larimarGem,
            },
        })

        recipes.changeToShaped({
            output: cctv.metalPlate,
            outputCount: 4,
            pattern: ['II ', '   ', '   '],
            ingredients: {
                I: vault.chromaticIron,
            },
        })

        recipes.changeToShaped({
            output: cctv.woodenBoard,
            outputCount: 2,
            pattern: [' D ', 'D  ', '   '],
            ingredients: {
                D: vault.driftwood,
            },
        })

        recipes.changeToShaped({
            output: cctv.antenna,
            pattern: ['  S', ' I ', 'I  '],
            ingredients: {
                I: vault.chromaticIron,
                S: vault.chromaticSteel,
            },
        })
    }
}
