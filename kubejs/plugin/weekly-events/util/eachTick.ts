const execute = (callback: () => void, rest: (() => void)[]) => {
    callback()

    if (!rest.length) {
        return
    }

    Utils.server.scheduleInTicks(1, rest, ({ data }) => {
        const first = data.shift()
        execute(first, data)
    })
}

export const eachTick = (callbacks: (() => void)[]) => {
    const first = callbacks.shift()!
    execute(first, callbacks)
}
