type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

function random(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min)
}

export type LootTableItem = {
    type: 'item'
    getNBT: () => string
    weight: number
    value: [number, number]
}

export type LootTableGroup = {
    type: 'group'
    weight: number
    value: [number, number]
    items: PartialBy<LootTableItem, 'weight' | 'value'>[]
}

export type LootTable = (LootTableItem | LootTableGroup)[]

export type LootTableResult = {
    nbt: string
    value: number
}

export const executeLootTable = (table: LootTable): LootTableResult => {
    const weightSum = table.reduce((prev, curr) => prev + curr.weight, 0)
    const weightRng = Math.round(Math.random() * weightSum)

    let chosenItem = table[table.length - 1]
    let cumulativeWeight = 0
    for (let i = 0; i < table.length; i++) {
        const item = table[i]
        cumulativeWeight += item.weight
        if (weightRng <= cumulativeWeight) {
            chosenItem = item
            break
        }
    }

    if (chosenItem.type === 'group') {
        let subTable = chosenItem.items.map((subItem) => {
            let newItem = {}
            Object.assign(newItem, chosenItem, subItem)
            return newItem
        }) as LootTable
        return executeLootTable(subTable)
    }

    return {
        nbt: chosenItem.getNBT(),
        value: random(chosenItem.value[0] * 9 * 9 * 9, chosenItem.value[1] * 9 * 9 * 9),
    }
}
