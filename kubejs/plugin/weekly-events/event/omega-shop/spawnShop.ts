import { BlockPos } from '../../types'

function cleanNBT(str: string) {
    return str.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '')
}

export type SpawnShopProps = {
    pos: BlockPos
    currency: {
        id?: string
        amount: number
    }
    offerNbt: string
}

export const spawnShop = (props: SpawnShopProps) => {
    const nbt = cleanNBT(`{
        currencyStack: {
          stack: { id: "${props.currency.id || 'the_vault:vault_platinum'}", Count: 64b },
          amount: ${props.currency.amount}
        },
        offerStack: ${props.offerNbt},
        initialized: 1b
    }`)

    const pos = `${props.pos.x} ${props.pos.y} ${props.pos.z}`
    Utils.server.runCommandSilent(`setblock ${pos} minecraft:air`)
    Utils.server.runCommandSilent(`setblock ${pos} the_vault:shop_pedestal${nbt}`)
}
