var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
	{
		context: __dirname,
		entry: './src/index.tsx',
		output: {
			filename: './artifact/app.js'
		},
		resolve: {
			extensions: ['' , '.scss' , '.css' , ".ts" , ".tsx" , '.js' , '.json'],
			modulesDirectories: [
				'src',
				'node_modules',
				path.resolve(__dirname, './node_modules')
			]
		},
		devtool: 'source-map',
		module: {
			loaders: [
				//	TypeScript
				{
					test: /\.tsx?$/,
					loader: 'babel-loader?presets[]=es2015,presets[]=stage-3,presets[]=react!ts-loader',
					exclude: /(node_modules)/
				},

				//	CSS
				{
					test: /(\.scss|\.css)$/,
					loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
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
		// sassLoader: {
		// 	data: '@import "theme/_config.scss";',
		// 	includePaths: [path.resolve(__dirname, './scss')]
		// },
		plugins: [
			new ExtractTextPlugin('./artifact/app.css', { allChunks: true }),
		]
		,
		externals: {
			"react": "React",
			"react-dom": "ReactDOM"
		}
	},
	// デフォルトCSS
	{
		entry: './scss/loader.js',
		output: {
			filename: './artifact/default.css'
		},
		devtool: 'source-map',
		module: {
			loaders: [
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader")
				},
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('./artifact/default.css')
		]
	},
	//HTMLファイル
	{
		output: {
			path: 'artifact',
			filename: 'index.html'
		},
		module: {
			loaders: [
				{
					test: /\.hbs$/, loader: "handlebars"
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'hbs/entry.hbs',
				cacheBreak: new Date().getTime()
			})
		]
	}
];
