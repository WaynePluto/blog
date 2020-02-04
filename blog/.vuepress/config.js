module.exports = {
    title: '刘伟的博客',
    description: 'Just playing around',
    base: '/',
    theme: '@vuepress/blog',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        sidebar: [
            '/',
        ],
        nav: [
            {
                text: 'Blog',
                link: '/',
            },
            {
                text: 'Server',
                link: '/server/'
            }
        ],
        directories: [
            {
                id: 'blog',
                dirname: '_post',
                path: '/'
            },
            {
                id: 'server',
                dirname: 'server',
                path: '/server/'
            }
        ]
    }
}