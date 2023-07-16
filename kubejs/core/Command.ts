export abstract class Command {
    abstract register(
        Commands: typeof Internal.Commands,
        Arguments: typeof Internal.ArgumentTypeWrapper,
        event: Internal.CommandRegistryEventJS,
    ): Internal.LiteralArgumentBuilder_<Internal.CommandSourceStack_>

    constructor() {
        onEvent('command.registry', (event) => {
            const command = this.register(event.commands as any, event.arguments as any, event)
            event.register(command)
        })
    }
}
