console.log('Alex tables...')
onEvent('entity.loot_tables', (event) => {
    console.log('Modyfing emu...')
    event.modifyEntity('alexsmobs:emu' as any, (table) => {
        table.addPool((pool: any) => {
            pool.addItem('alexsmobs:emu_egg', 1)
        })
    })
})
