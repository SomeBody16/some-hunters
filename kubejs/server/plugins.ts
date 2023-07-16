import { Plugin } from '../core/Plugin'
import { BannerClaimPlugin } from './banner-claim'
import { CCRecipesPlugin } from './cc-recipes'
import { EndJourneyPlugin } from './end-journey'
import { InventorySwitchPlugin } from './inventory-switch'
import { LoginParticlesPlugin } from './login-particles'
import { RailwaysRecipesPlugin } from './railways-recipes'
import { SomeVaultPlugin } from './some-vault'

export const plugins: Plugin[] = [
    //
    new BannerClaimPlugin(),
    // new EndJourneyPlugin(),
    new SomeVaultPlugin(),
    new LoginParticlesPlugin(),
    new InventorySwitchPlugin(),
    new RailwaysRecipesPlugin(),
    // new CCRecipesPlugin(),
    // new DiscordChatPlugin(),
]
