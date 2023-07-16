import { Plugin } from '../../core/Plugin'
import { DimensionProtectionListener } from './listener/DimensionProtectionListener'

export class EndJourneyPlugin extends Plugin {
    init() {}

    listeners = [new DimensionProtectionListener()]
}
