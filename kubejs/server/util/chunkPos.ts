export const chunkPos = (pos: { x: number; z: number }) => {
    const x = Math.floor(pos.x / 16)
    const z = Math.floor(pos.z / 16)
    const id = `chunk_${x}_${z}`
    return { x, z, id }
}
