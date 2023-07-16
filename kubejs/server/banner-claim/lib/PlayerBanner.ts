import { JsonIOWrapper } from '../../util/json-wrapper'

export class PlayerBanner {
    private pattern?: string

    constructor(
        readonly player: Internal.PlayerJS<any>,
        private readonly patternPath = `kubejs/config/banner-claim/player/${player.id}.json`,
    ) {
        this.pattern = JsonIOWrapper.read(patternPath)?.pattern
    }

    exists(): boolean {
        return !!this.pattern
    }

    compare(blockPattern?: string): boolean {
        return !!blockPattern && this.pattern === blockPattern
    }

    save(pattern: string): void {
        JsonIOWrapper.write(this.patternPath, { pattern })
    }
}
