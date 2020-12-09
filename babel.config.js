const presets = [
    ["@babel/env",{
        //设置打包后的代码将在哪些浏览器运行？只针对他们做转换
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not dead','chrome >= 45','firefox >= 38','Edge >= 12','Explorer >= 10','iOS >= 9', 'Safari >= 9', 'Android >= 4.4','opera >= 30']
        },
        // @babel/polyfill会将所有高阶语法转化，配置useBuiltIns只转化项目中用到的语法
        // 797kb => 291kb
        // 当useBuiltIns:”usage"时，入口文件就不需要import "@/babel/polyfill"了
        // 当useBuiltIns:entry"时，需要在入口文件import "@/babel/polyfill"
        "useBuiltIns":"usage",
        "modules": false,
        "corejs":3
    }]
]

module.exports = {presets}