import type { Event } from '../../types'
import './commands'
import { onEnd, onStart } from './on'

export const OmegaShopEvent: Event = {
    onStart,
    onEnd,
}
