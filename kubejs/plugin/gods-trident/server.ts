import { particle } from '../../server/util'

type Effect = {
    chance: number
    execute: (target: Internal.Monster, owner: Internal.PlayerJS<any>) => void
}

const effects: Effect[] = [
    {
        chance: 125,
        execute: (target, owner) => {
            const { x, y, z, level } = target
            const dimnesion = level.dimension.toString()

            let newHealth = target.getHealth() - 4
            if (newHealth < 0) newHealth = 1
            target.setHealth(newHealth)
            particle.totemOfUndying({ x, y, z }, dimnesion)
        },
    },
    {
        chance: 25,
        execute: (target, owner) => {
            const { x, y, z, level } = target
            const dimnesion = level.dimension.toString()

            let newHealth = target.getHealth() - 8
            if (newHealth < 0) newHealth = 1
            target.setHealth(newHealth)
            particle.dragonBreath({ x, y, z }, dimnesion)
        },
    },
    {
        chance: 10,
        execute: (target, owner) => {
            const { x, y, z, level } = target
            const dimnesion = level.dimension.toString()
            Utils.server.runCommandSilent(
                `execute in ${dimnesion} run summon minecraft:lightning_bolt ${x} ${y} ${z}`,
            )
        },
    },
    {
        chance: 10,
        execute: (target, owner) => {
            const { x, y, z, level } = target
            const dimnesion = level.dimension.toString()
            Utils.server.runCommandSilent(
                `execute in ${dimnesion} run summon minecraft:evoker_fangs ${x} ${y} ${z}`,
            )
        },
    },
    {
        chance: 10,
        execute: (target, owner) => {
            const { x, y, z, level } = target
            const dimnesion = level.dimension.toString()
            Utils.server.runCommandSilent(
                `execute in ${dimnesion} run summon area_effect_cloud ${x} ${y} ${z} {Particle:"dolphin",Radius:2f,Duration:30,Effects:[{Id:2,Amplifier:1b,Duration:50},{Id:19,Amplifier:0b,Duration:50},{Id:33,Amplifier:0b,Duration:50}]}`,
            )
        },
    },
    {
        chance: 10,
        execute: (target, owner) => {
            owner.potionEffects.add('minecraft:regeneration', 10, 1)
        },
    },
    {
        chance: 10,
        execute: (target, owner) => {
            const { x, y, z, level } = target
            const dimnesion = level.dimension.toString()
            Utils.server.runCommandSilent(
                `execute in ${dimnesion} run effect give @e[x=${x},y=${y},z=${z},distance=..1] minecraft:levitation 5`,
            )
        },
    },
    {
        chance: 10,
        execute: (target, owner) => {
            const { x, y, z, level } = target
            const dimnesion = level.dimension.toString()
            Utils.server.runCommandSilent(
                `execute in ${dimnesion} run effect give @e[x=${x},y=${y},z=${z},distance=..1] alexsmobs:earthquake 5`,
            )
        },
    },
]

onEvent('entity.hurt' as any, function (event: any) {
    if (event.source.type == 'trident') {
        const target: Internal.Monster = event.entity
        const owner: Internal.PlayerJS<any> = event.source.player

        const effectsPool: Effect[] = []
        effects.forEach((effect) => {
            for (let i = 0; i < effect.chance; i++) {
                effectsPool.push(effect)
            }
        })

        const randomEffect = effectsPool[Math.floor(Math.random() * effectsPool.length)]

        Utils.server.scheduleInTicks(1, () => {
            randomEffect.execute(target as any, owner)
        })
    }
})
