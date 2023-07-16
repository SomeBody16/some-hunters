export const effect = {
    give: (selector: string, effectName: string, seconds = 1, amplifier = 1) => {
        Utils.server.runCommandSilent(
            `effect give ${selector} ${effectName} ${seconds} ${amplifier}`,
        )
    },

    instantDamage: (selector: string, seconds = 1, amplifier = 1) =>
        effect.give(selector, 'minecraft:instant_damage', seconds, amplifier),
}
