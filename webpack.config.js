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
							limit: 801920,
							name: '[name].[hash:8].[ext]',
							outputPath: 'images/'
						}
					}
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
			filename: 'home.html',
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
