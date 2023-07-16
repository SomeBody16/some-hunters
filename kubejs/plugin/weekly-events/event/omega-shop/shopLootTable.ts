import { LootTable } from './lootTable'

export const shopLootTable: LootTable = [
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:unidentified_artifact',
        Count: 1b
    }`,
        value: [16, 64],
        weight: 2,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:artifact_fragment',
        Count: 1b
    }`,
        value: [8, 16],
        weight: 2,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:trinket',
        Count: 1b
    }`,
        value: [16, 32],
        weight: 3,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:unidentified_treasure_key',
        Count: 1b
    }`,
        value: [8, 32],
        weight: 3,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:legendary_treasure_omega',
        Count: 1b
    }`,
        value: [8, 24],
        weight: 4,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:loot_statue',
        Count: 1b
    }`,
        value: [1, 32],
        weight: 4,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:lost_bounty',
        Count: 1b
    }`,
        value: [8, 16],
        weight: 5,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:legendary_treasure_epic',
        Count: 1b
    }`,
        value: [8, 24],
        weight: 4,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:vault_catalyst_chaos',
        Count: 1b
    }`,
        value: [1, 16],
        weight: 5,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:key_piece',
        Count: 1b
    }`,
        value: [1, 8],
        weight: 6,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:knowledge_star',
        Count: 1b
    }`,
        value: [1, 8],
        weight: 6,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:mote_sanctity',
        Count: 1b
    }`,
        value: [1, 16],
        weight: 6,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:resilient_focus',
        Count: 1b
    }`,
        value: [1, 16],
        weight: 6,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:opportunistic_focus',
        Count: 1b
    }`,
        value: [1, 16],
        weight: 6,
    },
    {
        type: 'item',
        getNBT: () => `{
        id: 'the_vault:sour_orange',
        Count: 1b
    }`,
        value: [1, 16],
        weight: 6,
    },
]
