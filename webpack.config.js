const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash:6].js'
	},
	module: {
		rules: [
			{
				test: /\.(gif|jpg|jpeg|png|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							// 当图片大于801k时，交给file-loader处理，否则url-loader会把图片src转成base64编码
							limit: 801920,
							// 打包后的文件名
							name: '[name].[hash:8].[ext]',
							// 打包路径
							outputPath: 'images/'
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					'postcss-loader'
				]
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
							modules: true
						}
					},
					'postcss-loader',
					'less-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'use htmlWebpackplugin',
			filename: 'index.html',
			template: './template/index.html',
			favicon: 'static/icon/logo.ico',
			meta: {
				viewport:
					'width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no',
				'apple-touch-fullscreen': 'yes'
			}
		}),
		new CleanWebpackPlugin()
	]
};
