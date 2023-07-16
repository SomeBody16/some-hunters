import { config } from '../config'
import { executeWebhook } from './executeWebhook'
import { WebhookEmbed } from './WebhookMessage'

export const serverMessage = (embed: WebhookEmbed, webhookURL?: string) => {
    webhookURL ??= config.webhook.chat
    return executeWebhook(webhookURL, {
        username: 'Server',
        avatar_url: config.serverAvatar,
        embeds: [embed],
    })
}
