/**
 * Translates seconds into human readable format of seconds, minutes, hours, days, and years
 */
export function secondsForHumans(seconds: number): string {
    const minute = 60
    const hour = 60 * minute
    const day = 24 * hour
    const year = 365 * day

    const floorCeil = (value: number): 'floor' | 'ceil' => (value >= 0.5 ? 'ceil' : 'floor')

    const inMinutes = (seconds: number) => Math[floorCeil(seconds / 60)](seconds / minute)
    const inHours = (seconds: number) =>
        Math[floorCeil(inMinutes(seconds) / 60)](inMinutes(seconds) / 60)
    const inDays = (seconds: number) =>
        Math[floorCeil(inHours(seconds) / 24)](inHours(seconds) / 24)
    const inYears = (seconds: number) =>
        Math[floorCeil(inDays(seconds) / 365)](inDays(seconds) / 365)

    switch (true) {
        case seconds < 60:
            return `${seconds} seconds`
        case seconds < hour:
            return `${inMinutes(seconds)} minutes`
        case seconds < day:
            return `${inHours(seconds)} hours`
        case seconds < year:
            return `${inDays(seconds)} days`
        default:
            return `${inYears(seconds)} years`
    }
}
