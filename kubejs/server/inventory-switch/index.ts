import { Plugin } from '../../core/Plugin'
import { SwitchListener } from './listener/SwitchListener'

export class InventorySwitchPlugin extends Plugin {
    init() {}

    listeners = [new SwitchListener()]
}
