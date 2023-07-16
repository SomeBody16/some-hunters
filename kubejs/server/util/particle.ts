export const particle = {
    show: (
        name: string,
        pos: { x: number; y: number; z: number },
        speed = 1,
        delta = 1,
        count = 100,
        dimension: string = 'minecraft:overworld',
        type: 'normal' | 'force' = 'normal',
    ) => {
        Utils.server.runCommandSilent(
            `execute in ${dimension} run particle ${name} ${pos.x} ${pos.y} ${pos.z} ${delta} ${delta} ${delta} ${speed} ${count} ${type}`,
        )
    },

    dragonBreath: (pos: { x: number; y: number; z: number }, dimension = 'minecraft:overworld') =>
        particle.show('minecraft:dragon_breath', pos, 0.01, 1, 100, dimension),

    totemOfUndying: (pos: { x: number; y: number; z: number }, dimension = 'minecraft:overworld') =>
        particle.show('minecraft:totem_of_undying', pos, 0.25, 1, 1000, dimension),
}
