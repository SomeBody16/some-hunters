import { Plugin } from '../../core/Plugin'
import { SpawnParticleListener } from './listener/SpawnParticleListener'

export class LoginParticlesPlugin extends Plugin {
    init() {}

    listeners = [new SpawnParticleListener()]
}
