module.exports = {
	mode: 'development',
	entry: {
		'main': './src/ts/main.ts'
	},
	output: {
		path: __dirname + '/public/common/js',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	},
	plugins: [],
	resolve: {
		extensions: [
			'.ts'
		]
	}
};
