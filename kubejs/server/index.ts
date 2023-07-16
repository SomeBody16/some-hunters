import { plugins } from './plugins'

// import '../plugin/ars-novu/server'
import '../plugin/create-recipes/server'
import '../plugin/dark-utilities/server'
import '../plugin/delight-recipes/server'
// import '../plugin/discord-integration/server'
// import '../plugin/gods-trident/server'
import '../plugin/alexs-mobs/server'
import '../plugin/botania/server'
import '../plugin/cc-tweaked/server'
import '../plugin/engineers-decor/server'
import '../plugin/krem0wka/server'
import '../plugin/minecraft/server'
import '../plugin/powah/server'
import '../plugin/sophisticatedbackpacks/server'
import '../plugin/the_vault/server'
import '../plugin/thermal/server'
import '../plugin/weekly-events/server'

console.log('Starting SomeServer...')
plugins.forEach((plugin) => {
    plugin.listeners.forEach((listener) => listener.register())
    plugin.init()
})
