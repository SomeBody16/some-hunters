import { Plugin } from '../../core/Plugin'
import { RecipesListener } from './listener/RecipesListener'

export class RailwaysRecipesPlugin extends Plugin {
    init() {}

    listeners = [new RecipesListener()]
}
