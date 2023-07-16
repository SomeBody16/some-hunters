export const FLUID = {
    redstone: {
        display: 'Destabilized Redstone',
        luminosity: 6,
        density: 3000,
        temperature: 1300,
        viscosity: 6000,
    },
    glowstone: {
        display: 'Energized Glowstone',
        luminosity: 15,
        density: 3000,
        temperature: 300,
        viscosity: 6000,
    },
    ender: {
        display: 'Resonant Ender',
        luminosity: 4,
        density: 3000,
        temperature: 300,
        viscosity: 6000,
    },
    sap: {
        display: 'Sap',
        luminosity: 0,
        density: 3000,
        temperature: 300,
        viscosity: 6000,
    },
    syrup: {
        display: 'Syrup',
        luminosity: 0,
        density: 3000,
        temperature: 300,
        viscosity: 6000,
    },
    resin: {
        display: 'Resin',
        luminosity: 0,
        density: 3000,
        temperature: 300,
        viscosity: 6000,
    },
    tree_oil: {
        display: 'Tree Oil',
        luminosity: 0,
        density: 3000,
        temperature: 300,
        viscosity: 6000,
    },
    latex: {
        display: 'Latex',
        luminosity: 0,
        density: 3000,
        temperature: 300,
        viscosity: 6000,
    },
    creosote: {
        display: 'Creosote',
        luminosity: 0,
        density: 3000,
        temperature: 300,
        viscosity: 6000,
    },
    crude_oil: {
        display: 'Crude',
        luminosity: 0,
        density: 3000,
        temperature: 300,
        viscosity: 6000,
    },
    heavy_oil: {
        display: 'Heavy Oil',
        luminosity: 2,
        density: 3000,
        temperature: 1300,
        viscosity: 6000,
    },
    light_oil: {
        display: 'Light Oil',
        luminosity: 3,
        density: 3000,
        temperature: 300,
        viscosity: 6000,
    },
    refined_fuel: {
        display: 'Refined Fuel',
        luminosity: 4,
        density: 3000,
        temperature: 1300,
        viscosity: 6000,
    },
}

export const ID = {
    fluid: (() => {
        const result: any = {}

        Object.entries(FLUID).forEach(([id, data]) => {
            result[id] = `${id}`
        })

        return result as Record<keyof typeof FLUID, string>
    })(),
    bucket: (() => {
        const result: any = {}

        Object.entries(FLUID).forEach(([id, data]) => {
            result[id] = `${id}_bucket`
        })

        return result as Record<keyof typeof FLUID, string>
    })(),
}
