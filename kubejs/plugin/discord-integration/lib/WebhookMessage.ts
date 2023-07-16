type BaseMessage = {
    username?: string
    avatar_url?: string
    tts?: boolean
}

export type WebhookContentMessage = BaseMessage & {
    content: string
}

export type WebhookEmbed = {
    title?: string
    description?: string
    url?: string
    color?: number
    footer?: {
        text: string
        icon_url?: string
    }
    image?: {
        url: string
        width?: number
        height?: number
    }
    thumbnail?: {
        url: string
        width?: number
        height?: number
    }
    video?: {
        url: string
        width?: number
        height?: number
    }
    author?: {
        name: string
        url?: string
        icon_url?: string
    }
    fields?: {
        name: string
        value: string
        inline?: boolean
    }[]
}

export type WebhookEmbedMessage = BaseMessage & {
    embeds: WebhookEmbed[]
}

export type WebhookMessage = WebhookContentMessage | WebhookEmbedMessage
