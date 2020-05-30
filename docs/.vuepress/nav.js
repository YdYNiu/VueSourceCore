// 导出【顶部导航栏数据】数组
module.exports = [
    // 单项 text：显示文字，link：指向链接
    // 这里的'/' 指的是 docs文件夹路径
    // [以 '/' 结尾的默认指向该路径下README.md文件]
   { text: 'Vue中文文档', link: 'https://doc.vue-js.com/' },  // http://localhost:8080/Wiki1001Pro/FAQ/
   { text: 'Vue中文社区', link: 'https://vue-js.com/' },
   { text: 'VuePress中文网', link: 'https://www.vuepress.cn/' }
   // 多项，下拉形式 , 没有link选项则不能点击
//   , {
//        text: 'Concat',
//        items: [
//            // link：指向链接也可以是外网链接
//            { text: 'Segmentfault', link: '' },
//            { text: 'CSDN', link: '' },
//        ]
//    },
//    {
//        text: 'GitHub',
//        items: [
//            { text: 'GitHub首页', link: '' },
//            { text: 'Island', link: '' },
//            { text: 'TimeWaster', link: '' },
//        ]
//    },
]