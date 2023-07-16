import { Plugin } from '../../core/Plugin'
import { RecipesListener } from './listener/RecipesListener'

export class CCRecipesPlugin extends Plugin {
    init() {}

    listeners = [new RecipesListener()]
}
