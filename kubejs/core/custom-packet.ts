type Packets = {
    vault_ability: { key: string }
}

type PacketName = keyof Packets
type PacketData<TEvent extends PacketName> = Packets[TEvent]

export const sendCustomPacket = <TPacket extends PacketName>(
    player: Internal.ClientPlayerJS,
    channel: TPacket,
    data: PacketData<TPacket>,
) => {
    player.sendData(channel, data)
}

export const onCustomPacket = <TPacket extends PacketName>(
    channel: TPacket,
    listener: (packet: { player: Internal.PlayerJS<any>; data: PacketData<TPacket> }) => void,
) => {
    onEvent(`player.data_from_client.${channel}` as any, listener as any)
}
