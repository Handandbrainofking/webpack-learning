let webpackConfig
module.exports = env => {
    switch(env.NODE_ENV) {
        case 'prod':
        case 'production':  
            webpackConfig = require('./configs/webpack.prod.conf')
        case 'dev':
        case 'development':
            webpackConfig = require('./configs/webpack.dev.conf')
        default:    
            webpackConfig = require('./configs/webpack.dev.conf')
    }
    return webpackConfig

}