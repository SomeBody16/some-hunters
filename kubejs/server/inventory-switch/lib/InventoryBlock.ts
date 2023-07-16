import ArmorStand from './ArmorStand'

const validChest = [
    'the_vault:wooden_chest_placeable',
    'the_vault:living_chest_placeable',
    'the_vault:ornate_chest_placeable',
    'the_vault:gilded_chest_placeable',
]

export default class IntventoryBlock {
    constructor(private readonly block: Internal.BlockContainerJS) {}

    isValidStructure(): boolean {
        return !!this.getChest() && !!this.getArmorStand()
    }

    getChest(): Internal.BlockContainerJS | undefined {
        if (validChest.includes(this.block.id)) {
            return this.block
        }
    }

    getArmorStand(): ArmorStand | undefined {
        const { x, y, z } = this.block
        const entitiesOnBase = this.block.level.getEntitiesWithin(
            AABB.of(x - 1, y - 1, z - 1, x + 1, y + 2, z + 1),
        )

        let armorStand
        entitiesOnBase.forEach((entity: Internal.EntityJS) => {
            if (entity.type === 'minecraft:armor_stand') {
                armorStand = entity
            }
        })
        return armorStand
    }

    getSavedInventory(): Internal.ItemStackJS[] {
        // length: 40
        const slots: Internal.ItemStackJS[] = []

        const chest = this.getChest()!
        for (let i = 1; i < 36; i++) {
            slots[i] = chest.inventory.get(i)
        }

        const armorStand = this.getArmorStand()!
        slots[36] = armorStand.feetArmorItem
        slots[37] = armorStand.legsArmorItem
        slots[38] = armorStand.chestArmorItem
        slots[39] = armorStand.headArmorItem
        slots[40] = armorStand.offHandItem
        slots[0] = armorStand.mainHandItem

        return slots
    }

    saveInventory({ inventory }: Internal.PlayerJS<any>) {
        const armorStand = this.getArmorStand()!
        const chest = this.getChest()!

        for (let i = 0; i <= 40; i++) {
            switch (true) {
                case i == 0:
                    armorStand.mainHandItem = inventory.get(0)
                    break
                case i == 40:
                    armorStand.offHandItem = inventory.get(40)
                    break
                case i == 36:
                    armorStand.feetArmorItem = inventory.get(36)
                    break
                case i == 37:
                    armorStand.legsArmorItem = inventory.get(37)
                    break
                case i == 38:
                    armorStand.chestArmorItem = inventory.get(38)
                    break
                case i == 39:
                    armorStand.headArmorItem = inventory.get(39)
                    break
                default:
                    chest.inventory.set(i, inventory.get(i))
            }
        }
    }

    switchInventory(player: Internal.PlayerJS<any>) {
        const savedInventory = this.getSavedInventory()
        this.saveInventory(player)

        for (let i = 0; i <= 40; i++) {
            player.inventory.set(i, savedInventory[i])
        }
    }
}
