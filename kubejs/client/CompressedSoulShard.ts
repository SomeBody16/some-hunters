onEvent('item.tooltip', (tooltip) => {
    const soulShardTooltip = (value: number, color: string): any =>
        `§fValue of ${color}${value} §fsoul shards`

    const soulShardTooltipSummary = (value: number, summary: number, color: string): any =>
        `§fValue of ${color}${value} [${summary}] §fsoul shards`

    const advancedTooltip =
        (power: number, color: string) =>
        (
            item: Internal.ItemStackJS,
            advanced: boolean,
            text: Internal.List<net.minecraft.network.chat.Component>,
        ) => {
            const value = Math.pow(9, power)
            const summary = value * item.count
            if (!tooltip.shift) {
                text.add(1, `§fValue of ${color}${value} §fsoul shards` as any)
            } else {
                text.add(1, `§fValue of ${color}${value} [${summary}] §fsoul shards` as any)
            }
        }

    tooltip.addAdvanced('kubejs:compressed_soul_shard_x1' as any, advancedTooltip(1, '§b'))
    tooltip.addAdvanced('kubejs:compressed_soul_shard_x2' as any, advancedTooltip(2, '§e'))
    tooltip.addAdvanced('kubejs:compressed_soul_shard_x3' as any, advancedTooltip(3, '§d'))
    tooltip.addAdvanced('kubejs:compressed_soul_shard_x4' as any, advancedTooltip(4, '§a'))
})
