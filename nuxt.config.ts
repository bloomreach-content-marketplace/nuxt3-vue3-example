// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    plugins: ['~/plugins/bloomreach'],
    imports: {
        dirs: [
            // Scan top-level modules
            'composables',
        ]
    },
    app: {
        head: {
            title: 'Bloomreach Contetn + Nuxt3 = ♥️',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    hid: 'description',
                    name: 'description',
                    content: '',
                },
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {
                    rel: 'stylesheet',
                    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
                    integrity: 'sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk',
                    crossorigin: 'anonymous',
                },
            ],
        }
    }


})
