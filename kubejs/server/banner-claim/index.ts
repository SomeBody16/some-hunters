import { Plugin } from '../../core/Plugin'
import { PatternRemoveListener } from './listener/PatternRemoveListener'
import { PatternSaveListener } from './listener/PatternSaveListener'
import { ProtectionListener } from './listener/ProtectionListener'

export class BannerClaimPlugin extends Plugin {
    init() {}

    listeners = [new PatternSaveListener(), new PatternRemoveListener(), new ProtectionListener()]
}
