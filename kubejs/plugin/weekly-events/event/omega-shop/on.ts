import { eachTick } from '../../util/eachTick'
import './commands'
import { config } from './config'
import { executeLootTable } from './lootTable'
import { spawnShop } from './spawnShop'

export const onStart = () => {
    for (let i = 0; i < config.shops.length; i++) {
        const { x, y, z } = config.shops[i]
        const item = executeLootTable(config.shopLootTable)

        eachTick([
            () =>
                spawnShop({
                    pos: { x, y, z },
                    currency: {
                        amount: Math.round(item.value * 0.5),
                        id: 'the_vault:vault_bronze',
                    },
                    offerNbt: item.nbt,
                }),
        ])
    }

    Utils.server.runCommandSilent(
        'tellraw @a ["",{"text":"OMEGA SHOP ","bold":true,"color":"green"},{"text":"has been opened!","bold":true}]',
    )
}

export const onEnd = () => {
    for (let i = 0; i < config.shops.length; i++) {
        const { x, y, z } = config.shops[i]
        Utils.server.runCommandSilent(`setblock ${x} ${y} ${z} minecraft:air`)
    }
}
