const path = require('path');
module.exports = {
    base: '/DrTire/',
    title: 'TireUI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: '交流', link: 'https://google.com'},
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/popover',
                    '/components/tabs',
                    '/components/toast',
                ]
            },

        ]
    },
    // scss:{
    //     includePaths: [path.join(__dirname, '../../styles')]
    // }
};