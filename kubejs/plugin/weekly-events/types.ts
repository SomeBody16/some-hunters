export type Event = {
    onStart: () => void
    onEnd: () => void
}

export type BlockPos = { x: string | number; y: string | number; z: string | number }
