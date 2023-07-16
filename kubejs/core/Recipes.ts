import { JsonIOWrapper } from '../server/util'

type RemoveBy = { output: string } | { mod: string } | { type: string }

export default class Recipes {
    constructor(private readonly event: any) {}

    shapeless(output: string, ingredients: string[]) {
        this.event.shapeless(output, ingredients)
    }

    shaped(output: string, pattern: [string, string, string], ingredients: Record<string, string>) {
        this.event.shaped(output, pattern, ingredients)
    }

    remove(removeBy: RemoveBy) {
        this.event.remove(removeBy)
    }

    get create(): Internal.RecipeEventJS['recipes']['create'] {
        return this.event.recipes.create
    }

    get arsNouveau() {
        return {
            imbuement: (options: {
                input: {
                    item: string
                    source: number
                    pedestalItems: string[]
                }
                output: { item: string; count?: number }
            }) => {
                this.custom({
                    type: 'ars_nouveau:imbuement',
                    input: {
                        item: options.input.item,
                    },
                    source: options.input.source,
                    pedestalItems: options.input.pedestalItems.map((item) => ({
                        item: { item },
                    })),
                    output: options.output.item,
                    count: options.output.count || 1,
                })
            },
            changeToImbuement: (options: {
                input: {
                    item: string
                    source: number
                    pedestalItems: string[]
                }
                output: { item: string; count?: number }
            }) => {
                this.remove({ output: options.output.item })
                this.arsNouveau.imbuement(options)
            },
            glyph: (options: {
                output: {
                    item: string
                    count?: string
                }
                input: {
                    items: string[]
                    exp: number
                }
            }) => {
                const fileName = options.output.item.replace('ars_nouveau:', '')
                const path = `kubejs/data/ars_nouveau/recipes/${fileName}.json`
                JsonIOWrapper.write(path, {
                    type: 'ars_nouveau:glyph',
                    count: options.output.count || 1,
                    inputItems: options.input.items.map((item) => ({
                        item: { item },
                    })),
                    exp: options.input.exp,
                    output: options.output.item,
                })
            },
            changeToGlyph: (options: {
                output: {
                    item: string
                    count?: string
                }
                input: {
                    items: string[]
                    exp: number
                }
            }) => {
                // this.remove({ output: options.output.item })
                this.arsNouveau.glyph(options)
            },
            aparatus: (options: {
                output: string
                input: {
                    reagent: string
                    pedestalItems: string[]
                    sourceCost?: number
                    keepNbtOfReagent?: boolean
                }
            }) => {
                this.custom({
                    type: 'ars_nouveau:enchanting_apparatus',
                    reagent: [
                        {
                            item: options.input.reagent,
                        },
                    ],
                    pedestalItems: options.input.pedestalItems.map((item) => ({
                        item: { item },
                    })),
                    output: {
                        item: options.output,
                    },
                    sourceCost: options.input.sourceCost || 0,
                    keepNbtOfReagent: options.input.keepNbtOfReagent || false,
                })
            },
            changeToAparatus: (options: {
                output: string
                input: {
                    reagent: string
                    pedestalItems: string[]
                    sourceCost?: number
                    keepNbtOfReagent?: boolean
                }
            }) => {
                this.remove({ output: options.output })
                this.arsNouveau.aparatus(options)
            },
        }
    }

    changeToShaped(options: {
        output: string
        outputCount?: number
        pattern: [string, string, string]
        ingredients: Record<string, string>
    }) {
        this.remove({ output: options.output })
        this.shaped(
            `${options.outputCount || 1}x ${options.output}`,
            options.pattern,
            options.ingredients,
        )
    }

    changeToShapeless(options: { output: string; outputCount?: number; ingredients: string[] }) {
        this.remove({ output: options.output })
        this.shapeless(`${options.outputCount || 1}x ${options.output}`, options.ingredients)
    }

    custom(recipeData: any) {
        this.event.custom(recipeData)
    }
}
