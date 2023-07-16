import { JsonIOWrapper, secondsForHumans, secondsToTicks } from '../../util'
import { banSeconds } from '../config'

const banPath = (playerId: Internal.UUID) =>
    `kubejs/config/vault-death-ban/ban-entry/${playerId.toString()}.json`

export class Banishment {
    level: number = 0
    until: Date = new Date()

    constructor(readonly player: { id: Internal.UUID; profile: Internal.GameProfile }) {
        this.load()
    }

    isBanned(): boolean {
        return Date.now() < this.until.getTime()
    }

    kick() {
        const leftSeconds = (this.until.getTime() - Date.now()) / 1000
        const cmd = `kick ${
            this.player.profile.name
        } You're banished from this world\n${secondsForHumans(leftSeconds)} left`
        Utils.server.runCommandSilent(cmd)
    }

    ban(seconds: number) {
        this.sendBanAnnoucment(seconds)
        this.until = new Date(Date.now() + seconds * 1000)
        this.save()

        Utils.server.scheduleInTicks(secondsToTicks(15), this, ({ data }) => data.kick())
    }

    unban() {
        this.until = new Date()
        this.save()

        Utils.server.scheduleInTicks(1, null, () => {
            const message = Component.join(Component.string(' '), [
                Component.string('Sins of'),
                Component.string(this.player.profile.name).green(),
                Component.string('has been forgiven. He shall now return.'),
            ] as any)
            Utils.server.tell(message)
        })
    }

    nextBan() {
        const nextSeconds = banSeconds(++this.level)
        this.ban(nextSeconds)
    }

    private sendBanAnnoucment(seconds: number) {
        const message = Component.join(Component.string(' '), [
            Component.string(this.player.profile.name).green(),
            Component.string('failed in'),
            Component.string('The Vault').gold(),
            Component.string('and is banished from this world for'),
            Component.string(secondsForHumans(seconds)).red(),
        ] as any)
        Utils.server.tell(message)
    }

    private load() {
        const { level, until } = JsonIOWrapper.read(banPath(this.player.id)) || {}
        if (level && until) {
            this.level = level || 0
            this.until = until ? new Date(until) : new Date()
        }
    }

    private save() {
        JsonIOWrapper.write(banPath(this.player.id), {
            level: this.level,
            until: this.until.toString(),
        })
    }
}
