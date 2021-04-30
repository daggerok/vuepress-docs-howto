const baseHref = !!process.env.BASE_HREF ? process.env.BASE_HREF : '/';
module.exports = {
    title: 'VuePress howto',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base: baseHref,
    themeConfig: {
        repo: 'daggerok/vuepress-docs-how-too',
        // lastUpdated: 'Last Updated',
    },
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            // awesome md enhancer! partials includes!
            md.use(require('markdown-it-vuepress-code-snippet-enhanced'))
        }
    },
};
