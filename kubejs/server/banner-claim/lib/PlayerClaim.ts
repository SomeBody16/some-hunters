import { chunkPos, comparePos } from '../../util'
import { JsonIOWrapper } from '../../util/json-wrapper'
import { getBlockBannerPattern } from './getBannerPattern'
import { PlayerBanner } from './PlayerBanner'

type Claim = {
    bannerPos: { x: number; y: number; z: number }
}

export class PlayerClaim {
    private claimPath: string
    private claim?: Claim

    constructor(blockPos: { x: number; y: number; z: number }) {
        const { id } = chunkPos(blockPos)
        this.claimPath = `kubejs/config/banner-claim/chunk/${id}.json`
        this.claim = JsonIOWrapper.read(this.claimPath)?.claim
    }

    exists() {
        return !!this.claim
    }

    save(player: Internal.PlayerJS<any>, { x, y, z }: BlockPos) {
        const claim: Claim = {
            bannerPos: { x, y, z },
        }
        JsonIOWrapper.write(this.claimPath, { claim })
    }

    havePermissions(otherPlayer: Internal.PlayerJS<any>): boolean {
        if (!this.claim?.bannerPos) {
            return true
        }

        const playerBanner = new PlayerBanner(otherPlayer)
        const bannerBlock = otherPlayer.level.getBlock(
            this.claim.bannerPos.x,
            this.claim.bannerPos.y,
            this.claim.bannerPos.z,
        )
        const blockPattern = getBlockBannerPattern(bannerBlock)

        return !this.exists() || playerBanner.compare(blockPattern) || otherPlayer.isCreativeMode()
    }

    remove(bannerPos: BlockPos): boolean {
        if (comparePos(bannerPos, this.claim?.bannerPos)) {
            JsonIOWrapper.write(this.claimPath, {})
            return true
        }
        return false
    }
}
