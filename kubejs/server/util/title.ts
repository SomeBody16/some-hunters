export const title = {
    show: (
        selector: string,
        type: 'title' | 'subtitle' | 'actionbar',
        text: string,
        color = 'white',
        bold = false,
        italic = false,
    ): void => {
        Utils.server.runCommandSilent(
            `title ${selector} ${type} ${JSON.stringify({
                text,
                bold,
                italic,
                color,
            })}`,
        )
    },

    debug: (text: string) => {
        title.show('SomeBody16_', 'actionbar', text)
    },
}
