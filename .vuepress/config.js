const base = process.env.BASE || '/';

module.exports = {
    title: 'VuePress howto',
    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    base,
    themeConfig: {
        repo: 'daggerok/vuepress-docs-how-too',
    },
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-vuepress-code-snippet-enhanced'));
        },
    },
};
