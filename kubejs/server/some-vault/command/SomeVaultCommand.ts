import { Command } from '../../../core/Command'
import { Banishment } from '../lib/Banishment'

const arg = (Arguments: typeof Internal.ArgumentTypeWrapper) => ({
    playerSource: (ctx: any): Internal.PlayerJS<any> => ctx.source.getPlayerOrException().asKJS(),
    player: (ctx: any, name: string): Internal.PlayerJS<any> =>
        Arguments.PLAYER.getResult(ctx, name).asKJS(),
    blockPos: (ctx: any, name: string) => Arguments.BLOCK_POS.getResult(ctx, name),
})

export class SomeVaultCommand extends Command {
    register(
        Commands: typeof Internal.Commands,
        Arguments: typeof Internal.ArgumentTypeWrapper,
        event: Internal.CommandRegistryEventJS,
    ): Internal.LiteralArgumentBuilder_<Internal.CommandSourceStack> {
        return Commands.literal('some_vault')
            .requires((source) => source.hasPermission(2))
            .then(this.registerTrident(Commands, Arguments, event))
    }

    private registerTrident(
        Commands: typeof Internal.Commands,
        Arguments: typeof Internal.ArgumentTypeWrapper,
        event: Internal.CommandRegistryEventJS,
    ) {
        console.log('Registering trident command!')
        const argPlayer = Commands.argument('player', Arguments.PLAYER.create(event))
        const argCoords = Commands.argument('coords', Arguments.BLOCK_POS.create(event)).executes(
            (ctx) => {
                const player = arg(Arguments).player(ctx, 'player')
                const { x, y, z } = arg(Arguments).blockPos(ctx, 'coords')

                const random = Math.random()
                switch (true) {
                    case random <= 0.01:
                        Utils.server.runCommandSilent(`summon lightning_bolt ${x} ${y} ${z}`)
                        return 0
                    case random <= 0.03:
                        Utils.server.runCommandSilent(
                            `effect give ${player.profile.name} ${x} ${y} ${z} 3 1`,
                        )
                        return 0
                    case random <= 0.1:
                        Utils.server.runCommandSilent(`summon evoker_fangs ${x} ${y} ${z}`)
                        return 0
                    case random <= 0.2:
                        Utils.server.runCommandSilent(
                            `summon area_effect_cloud ${x} ${y} ${z} {Radius:1.8f,Duration:2147483647,RadiusOnUse:-0.01f,RadiusPerTick:-0.0002f,ReapplicationDelay:40,Effects:[{Duration:1280,Id:20b,Amplifier:5b},{Duration:40,Id:7b,Amplifier:1b}]}`,
                        )
                        return 0
                }

                return 0
            },
        )

        return Commands.literal('trident_hit').then(argPlayer.then(argCoords))
    }

    private registerUnban(
        Commands: typeof Internal.Commands,
        Arguments: typeof Internal.ArgumentTypeWrapper,
        event: Internal.CommandRegistryEventJS,
    ) {
        const argPlayer = Commands.argument('player', Arguments.PLAYER.create(event)).executes(
            (ctx) => {
                const caller = arg(Arguments).playerSource(ctx)
                const player = arg(Arguments).player(ctx, 'player')

                const banishment = new Banishment(player)
                if (banishment.isBanned()) {
                    banishment.unban()
                    return 1
                }

                const message = Component.join(Component.string(' '), [
                    Component.string(caller.profile.name).green(),
                    Component.string('is not vault-banned'),
                ] as any)
                caller.tell(message)

                return 0
            },
        )
        return Commands.literal('unban').then(argPlayer)
    }
}
