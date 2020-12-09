const path = require('path')
const helper = require('./helper')

module.exports = {
    mode: 'production',
    entry: {
        index: helper.rootNode('src/index.js')
    },
    output: {
        path: helper.rootNode('dist'),
        filename: '[name].[hash:6].js'
    },
    optimization: {
        usedExports: true
    },
    module: {
		rules: [
			{
				test: /\.js$/,
				//node_modules里面的代码基本经过了编译，所以忽略
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(gif|jpg|jpeg|png|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							// 当图片大于801k时，交给file-loader处理，否则url-loader会把图片src转成base64编码
							limit: 920,
							// 打包后的文件名
							name: '[name].[hash:8].[ext]',
							// 打包路径
							outputPath: 'images/',
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: false,
						},
					},
					'postcss-loader',
				],
			},

			//使用less预处理器
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							// 开启模块化
							modules: true,
						},
					},
					'postcss-loader',
					'less-loader',
				],
			},
		],
	},
	resolve: {
        extensions: ['.js','.vue','.json'],
		alias: {
			'@': helper.rootNode('src'),
		},
	}
}