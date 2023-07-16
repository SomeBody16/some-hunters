import { WebhookMessage } from './WebhookMessage'

const FetchAPI: any = java('dev.latvian.mods.kubejs.sb.FetchAPI' as any)

export const executeWebhook = (webhook: string, message: WebhookMessage) => {
    FetchAPI.post(webhook, message)
}
