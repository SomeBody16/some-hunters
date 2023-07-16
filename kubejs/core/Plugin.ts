import { Command } from './Command'
import { EventListener } from './EventListener'

export abstract class Plugin {
    abstract init(): void

    listeners: EventListener[] = []
    commands: Command[] = []
}
