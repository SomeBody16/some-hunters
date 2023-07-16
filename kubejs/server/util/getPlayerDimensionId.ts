export const getPlayerDimensionId = (minecraftPlayer: Internal.Player): string =>
    minecraftPlayer.level.dimension().location().toString()
