const FluidBucketItemBuilder = java('dev.latvian.mods.kubejs.fluid.FluidBucketItemBuilder')

const createThermalFluid = (props: {
    event: Registry.Fluid
    id: string
    display: string
    luminosity: number
    density: number
    temperature: number
    viscosity: number
}) => {
    const stillTexture = `thermal:block/fluids/${props.id}_still`
    const flowingTexture = `thermal:block/fluids/${props.id}_flow`

    const fluid = props.event //
        .create(`${props.id}_decorative`)
        .stillTexture(stillTexture)
        .flowingTexture(flowingTexture)
        .luminosity(props.luminosity)
        .density(props.density)
        .temperature(props.temperature)
        .viscosity(props.viscosity)

    fluid.bucketItem.textureJson({
        parent: 'minecraft:item/generated',
        textures: {
            layer0: `thermal:item/${props.id}_bucket`,
        },
    } as any)
}

onEvent('fluid.registry', (event) => {
    // Object.entries(FLUID).forEach(([id, data]) => {
    //     createThermalFluid({
    //         event,
    //         id,
    //         ...data,
    //     })
    // })
})
