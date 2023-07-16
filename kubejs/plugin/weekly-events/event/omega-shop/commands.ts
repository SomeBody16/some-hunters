import { JsonIOWrapper } from '../../../../server/util'
import { registerCommand } from '../../util/registerCommand'
import { config } from './config'
import { executeLootTable } from './lootTable'
import { onStart } from './on'
import { spawnShop } from './spawnShop'

const registerLocalCommand = (props: {
    action: string
    execute: (args: string[], player: Internal.PlayerJS<any>) => void
}) =>
    registerCommand({
        runIf([cmd, eventType, cmdAction], player) {
            return cmd === '!event' && eventType === 'omega-shop' && cmdAction === props.action
        },
        execute(args, player) {
            args.shift()
            args.shift()
            args.shift()
            props.execute(args, player)
        },
    })

registerLocalCommand({
    action: 'spawn-shop',
    execute([x, y, z], player) {
        const item = executeLootTable(config.shopLootTable)
        spawnShop({
            pos: { x, y, z },
            currency: {
                amount: item.value,
                id: 'the_vault:vault_bronze',
            },
            offerNbt: item.nbt,
        })
    },
})

const getWeekNumber = (date: Date): number => {
    const startOfYear = new Date(date.getFullYear(), 0, 1)
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000
    const weekNumber = Math.ceil((date.getTime() - startOfYear.getTime()) / millisecondsPerWeek)

    return weekNumber
}

registerLocalCommand({
    action: 'start',
    execute(_, player) {
        onStart()
    },
})

registerLocalCommand({
    action: 'reset',
    execute(_, player) {
        const resetPath = 'kubejs/config/event/omega-shop/reset.json'
        console.log(resetPath)
        const reset = JsonIOWrapper.read(resetPath) || {}
        console.log(reset)
        const currWeek = getWeekNumber(new Date())
        console.log(currWeek)

        if (currWeek <= reset.week) {
            player.tell(`You can't reset shop yet!` as any)
            return
        }

        JsonIOWrapper.write(resetPath, { week: currWeek })
        onStart()
    },
})
