import { Router } from '../core/router/router.js'

export const Link = (link: HTMLAnchorElement | null, callback?: () => void) => {
    link?.addEventListener('click', (event: Event) => {
        event.preventDefault()

        if (callback) {
            callback()
        }

        new Router().go(link.pathname)
    })
}
