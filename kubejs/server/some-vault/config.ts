export const isBanDimenstion = (id: string) => {
    return id.includes('the_vault')
}

export const banSeconds = (level: number) => {
    const minute = 60
    const hour = 60 * minute

    const banMap: Record<number, number> = {
        0: 15 * minute,
        1: 30 * minute,
        2: 1 * hour,
        3: 2 * hour,
        4: 4 * hour,
        5: 8 * hour,
        6: 12 * hour,
        7: 16 * hour,
        8: 20 * hour,
        9: 24 * hour,
    }

    return banMap[level] || banMap[9]
}
