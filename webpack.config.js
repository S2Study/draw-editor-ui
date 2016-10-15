const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = [
	{
		context: __dirname,
		entry: './lib/ExportRenderEditor.js',
		output: {
			filename: './dist/s2study-draw-ui.js'
		},
		resolve: {
			extensions: ['' , '.css' , '.js' , '.json'],
			modulesDirectories: [
				'src',
				'node_modules',
				path.resolve(__dirname, './node_modules')
			]
		},
		devtool: 'source-map',
		module: {
			loaders: [
				//	CSS
				{
					test: /(\.css)$/,
					loaders: [
						'style',
						'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
					]
				},
				//	Image
				{
					test: /\.(png|jpg|jpeg|gif|bmp)$/, loader: 'url-loader?limit=8192'
				}
			],
			preLoaders: [
				{
					test: /\.js$/,
					loader: "source-map-loader"
				}
			]
		},
		postcss: [autoprefixer],
		plugins: [
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("production"),
					BROWSER: JSON.stringify(true)
				}
			}),
			// new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[chunkhash].js', Infinity),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(true),
			new webpack.optimize.UglifyJsPlugin()
		],
		// externals: {
		// 	"react": "React",
		// 	"react-dom": "ReactDOM"
		// }
	},
	// // デフォルトCSS
	// {
	// 	entry: './scss/loader.js',
	// 	output: {
	// 		filename: './dist/default.css'
	// 	},
	// 	devtool: 'source-map',
	// 	module: {
	// 		loaders: [
	// 			{
	// 				test: /\.css$/,
	// 				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
	// 			},
	// 			{
	// 				test: /\.scss$/,
	// 				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
	// 			}
	// 		]
	// 	},
	// 	plugins: [
	// 		new ExtractTextPlugin('./artifact/default.css')
	// 	]
	// },
	// //HTMLファイル
	// {
	// 	output: {
	// 		path: 'dist',
	// 		filename: 'index.html'
	// 	},
	// 	module: {
	// 		loaders: [
	// 			{
	// 				test: /\.hbs$/, loader: "handlebars"
	// 			}
	// 		]
	// 	},
	// 	plugins: [
	// 		new HtmlWebpackPlugin({
	// 			template: 'hbs/entry.hbs',
	// 			cacheBreak: new Date().getTime()
	// 		})
	// 	]
	// }
];
