import { serverMessage } from '../lib'

onEvent('server.load', () => {
    serverMessage({
        color: 0x00ff00,
        title: 'Server started',
    })
})

onEvent('server.unload' as any, () => {
    serverMessage({
        color: 0xff0000,
        title: 'Server stopped',
    })
})
