import { Event } from '../types'
import { OmegaShopEvent } from './omega-shop'

export type Events = {
    [key: string]: {
        event: Event
        weight: number
    }
}

export const events = {
    omegaShop: {
        event: OmegaShopEvent,
        weight: 1,
    },
} satisfies Events
