const idOf = (item: TemplateStringsArray) => `computercraft:${item.raw}`

export const id = {
    computer: {
        normal: idOf`computer_normal`,
        advanced: idOf`computer_advanced`,
        command: idOf`computer_command`,
        pocket: {
            normal: idOf`pocket_computer_normal`,
            advanced: idOf`pocket_computer_advanced`,
        },
    },
    turtle: {
        normal: idOf`turtle_normal`,
        advanced: idOf`turtle_advanced`,
    },
    disk: idOf`disk`,
    printed_page: idOf`printed_page`,
    printed_pages: idOf`printed_pages`,
    printed_book: idOf`printed_book`,
    speaker: idOf`speaker`,
    disk_drive: idOf`disk_drive`,
    printer: idOf`printer`,
    monitor: {
        normal: idOf`monitor_normal`,
        advanced: idOf`monitor_advanced`,
    },
    modem: {
        normal: idOf`wireless_modem_normal`,
        advanced: idOf`wireless_modem_advanced`,
        wired: {
            full: idOf`wired_modem_full`,
            base: idOf`wired_modem`,
        },
        cable: idOf`cable`,
    },
    crafting: {
        antenna: 'kubejs:cc_antenna',
        display: 'kubejs:cc_display',
        lense: 'kubejs:cc_lense',
        magneticDisk: 'kubejs:cc_magnetic_coated_disk',
        metalPlate: 'kubejs:cc_metal_plate',
        metalWire: 'kubejs:cc_metal_wire',
        woodenBoard: 'kubejs:cc_wooden_board',
    },
}
