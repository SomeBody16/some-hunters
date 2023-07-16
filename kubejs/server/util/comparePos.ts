export const comparePos = (
    pos1?: { x: number; y: number; z: number },
    pos2?: { x: number; y: number; z: number },
): boolean => {
    return !!pos1 && !!pos2 && pos1.x === pos2.x && pos1.y === pos2.y && pos1.z === pos2.z
}
