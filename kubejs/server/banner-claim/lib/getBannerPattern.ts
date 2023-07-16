export const getBlockBannerPattern = (block: Internal.BlockContainerJS): string | undefined => {
    const nbtString = block.item.nbtString
    if (block.hasTag('minecraft:banners') && nbtString.includes('Patterns')) {
        return nbtString
    }

    return undefined
}
