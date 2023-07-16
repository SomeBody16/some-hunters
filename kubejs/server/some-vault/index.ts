import { Plugin } from '../../core/Plugin'
import { SomeVaultCommand } from './command/SomeVaultCommand'
import { RemoveRecipeListener } from './listener/recipe/RemoveRecipeListener'

import './CompressedSoulShard'

export class SomeVaultPlugin extends Plugin {
    init() {}

    listeners = [
        // new BanishOnDeathListener(),
        // new LoginCheckBanishmentListener(),
        new RemoveRecipeListener(),
    ]

    commands = [new SomeVaultCommand()]
}
