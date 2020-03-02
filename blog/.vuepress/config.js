module.exports = {
    title: '刘伟的博客',
    description: 'Just playing around',
    base: '/',
    theme: '@vuepress/blog',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    themeConfig: {
        sidebar: [
            '/',
        ],
        nav: [{
                text: 'Blog',
                link: '/',
            },
            {
                text: 'Server',
                link: '/server/'
            },
            {
                text: 'Web',
                link: '/web/'
            },
            {
                text: 'Vue',
                link: '/vue/'
            }
        ],
        directories: [{
                id: 'blog',
                dirname: '_post',
                path: '/'
            },
            {
                id: 'server',
                dirname: 'server',
                path: '/server/'
            }, {
                id: 'web',
                dirname: 'web',
                path: '/web/'
            }, {
                id: 'vue',
                dirname: 'vue',
                path: '/vue/'
            }
        ],
        footer: {
            contact: [{
                type: 'github',
                link: 'https://github.com/WaynePluto/blog',
            }],
            copyright: [{
                    text: 'MIT Licensed | Copyright © 2020 Liuwei',
                    link: 'http://www.liuweiblog.top',
                },
                {
                    text: '豫ICP备20003537号',
                    link: 'http://www.beian.miit.gov.cn',
                },
            ],
        },
    }
}