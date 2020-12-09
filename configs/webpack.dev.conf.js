const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const helper = require('./helper')
module.exports = {
	mode: 'production',
	entry: {
		index: helper.rootNode('./src/index.js'),
	},
	output: {
		path: helper.rootNode('./dist'),
		filename: '[name].[hash:6].js',
	},
	//开启devServe
	devServer: {
		// open: true, //自动打开浏览器页面
		// openPage: 'smarttitle',
		overlay: true,
		compress: true, //启用gzip压缩
		host: '0.0.0.0', //指定host，默认localhost。如果希望外部服务器可访问，可指定为：host: '0.0.0.0'
		port: 8989, // 端口
		hot: true, //启用 webpack 的模块热替换特性
		// hotOnly: true, // 可选，即使代码没生效，也不刷新浏览器
		// https: true, //启用https服务
		// index: 'index.html',
		// inline: false, //默认为true，启用内联模式，false对应iframe模式

		// contentBase: path.join(__dirname, 'public') // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。
		// 在所有响应中添加首部内容
		// headers: {
		// 	'X-Custom-Foo': 'bar'
		// }
		//如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。
		proxy: {
			'/api': {
				target: 'http://localhost: 3000',
				pathRewrite: { '^/api': '' },
				secure: false, //默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器。如果你想要接受，修改配置如下
			},
			'/Showtime': {
				target: 'https://api-m.mtime.cn',
				changeOrigin: true,
			},
			//拦截器
			// bypass: function (req, res, proxyOptions) {
			//     console.warn(req)
			// 	if (req.headers.accept.indexOf('html') !== -1) {
			// 		console.log('Skipping proxy for browser request');
			// 		return '/index.html';
			// 	}
			// }
		},

		// publicPath: '/cdn/', //默认值是‘/’，修改文件访问路径，此路径下的打包文件可在浏览器中访问。
		// stats: 'errors-only',
		useLocalIp: true, //使用本地ip启动项目
		// historyApiFallback: true //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
		// historyApiFallback:{
		//     rewrites: [
		//         {
		//             from: /^\/$/,to: '/views/landing.html' //根路径/ => /views/landing.html
		//         },
		//         {
		//             from: /^\/subpage/, to: '/views/subpage.html' // subpage => /views/subpage.html
		//         },
		//         {
		//             from: /./,
		//             to: '/views/404.html'
		//         }
		//     ]
		// }
	},
	// devtool: 'source-map',
	// optimization: {
	// 	// 优化导出的模块
	// 	usedExports: true,
	// },
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
		alias: {
			'@': helper.resolve('src'),
		},
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
				'apple-touch-fullscreen': 'yes',
			},
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
};
