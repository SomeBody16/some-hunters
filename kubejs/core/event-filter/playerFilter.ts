export const playerFilter =
    <TEvent extends Internal.EntityEventJS>(
        callback: (event: TEvent, player: Internal.PlayerJS<any>) => void,
    ) =>
    (event: TEvent) => {
        if (event?.entity?.isPlayer()) {
            callback(event, event.entity.player)
        }
    }
