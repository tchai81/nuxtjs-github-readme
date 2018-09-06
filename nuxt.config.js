module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Github Demo Project',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'A single page application that displays a user&apos;s Github projects and let&apos;s you view the project&apos;s README.'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    css: [{ src: 'github-markdown-css/github-markdown.css', lang: 'css' }],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            // svg loader
            const svgRule = config.module.rules.find(rule => rule.loader === 'url-loader')
            svgRule.test = /\.(png|jpe?g|gif)$/
            config.module.rules.push({ test: /\.svg$/, loader: 'vue-svg-loader' })
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    modules: ['bootstrap-vue/nuxt']
}