// 配置页面的各个文件信息
module.exports = {
    port: 8888,
    title: 'Vue源码系列整理-学习补充版', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: 'ydy的个人学习记录', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/logo.png' }], 
    ],
    base: '/VueSourceCore/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 页面中代码块显示行号
    },
    plugins: ['@vuepress/plugin-back-to-top'],
    themeConfig: {
        repo: 'YdYNiu/VueSourceCore',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在GitHub上编辑此页',
        searchMaxSuggestion: 10,
        serviceWorkder: {
            updatePopup: {
                message: '有新的内容',
                buttonText: '更新'
            }
        },
        collapsable: false,
        sidebarDepth: 1, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '最近更新' ,// 文档更新时间：每个文件git最后提交的时间,   
        // 顶部导航栏-->引用分模块总配置
        nav: require('./nav'),
         // 侧边栏菜单( 一个模块对应一个菜单形式 )
        sidebar: require('./sidebar')
        // 按照下面的数据格式，分模块的的实现
        // sidebar: [
        //     {
        //         title: '写在最前面',   // 必要的
        //         collapsable: false, // 可选的, 默认值是 true,
        //         children: [
        //            '/start/'
        //         ]
        //     },
        //     {
        //         title: '变化侦测篇',
        //         collapsable:false,
        //         children: [
        //             '/reactive/',
        //             '/reactive/object',
        //             '/reactive/array'
        //         ]
        //     }
        // ]
    }
 }