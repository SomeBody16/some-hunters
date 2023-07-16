import { EventListener } from '../../../core/EventListener'
import IntventoryBlock from '../lib/InventoryBlock'

export class SwitchListener extends EventListener {
    register(): void {
        let cooldown = false
        onEvent('block.right_click' as any, (event: any) => {
            const player: Internal.PlayerJS<any> = event.player
            const inventoryBlock = new IntventoryBlock(event.block)

            if (inventoryBlock.isValidStructure() && player.crouching) {
                event.cancel()

                if (!cooldown) {
                    cooldown = true
                    inventoryBlock.switchInventory(event.player)

                    Utils.server.scheduleInTicks(20, () => {
                        cooldown = false
                    })
                }
            }
        })
    }
}
