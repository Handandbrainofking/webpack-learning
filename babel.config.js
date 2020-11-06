const presets = [
    ["@babel/env",{
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not dead','chrome >= 45','firefox >= 38','Edge >= 12','Explorer >= 10','iOS >= 9', 'Safari >= 9', 'Android >= 4.4','opera >= 30']
        },
        "useBuiltIns":"usage",
        "modules": false,
        "corejs":3
    }]
]

module.exports = {presets}