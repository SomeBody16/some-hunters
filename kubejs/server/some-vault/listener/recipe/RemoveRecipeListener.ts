import { EventListener } from '../../../../core/EventListener'

export class RemoveRecipeListener extends EventListener {
    register(): void {
        onEvent('recipes', (event) => {
            event.remove({ id: 'the_vault:vault_altar' as any })
        })
    }
}
