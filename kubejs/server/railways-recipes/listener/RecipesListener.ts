import { EventListener } from '../../../core/EventListener'
import Recipes from '../../../core/Recipes'

export class RecipesListener extends EventListener {
    register(): void {
        onEvent('recipes', (event) => {
            const recipes = new Recipes(event)

            this.tracks(recipes)
        })
    }

    tracks(recipes: Recipes) {
        const trackId = 'create:track'
        const woodTypes = [
            'acacia',
            'birch',
            'crimson',
            'dark_oak',
            'jungle',
            'oak',
            'spruce',
            'warped',
            'blackstone',
        ]

        for (let i = 0; i < woodTypes.length; i++) {
            const woodType = woodTypes[i]

            const woodTrackId: any = `railways:track_${woodType}`
            const woodIngredientId: any = `minecraft:${woodType}_slab`

            recipes.remove({ output: woodTrackId })
            recipes.create.deploying(woodTrackId, [trackId, woodIngredientId])
        }
    }
}
