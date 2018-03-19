module.exports = {
	// モード値を production に設定すると最適化された状態で、
	// development に設定するとソースマップ有効でJSファイルが出力される
	mode: 'development',

	// メインとなるJavaScriptファイル（エントリーポイント）
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
				// 拡張子 .ts の場合
				test: /\.ts$/,
				// TypeScript をコンパイルする
				use: 'ts-loader'
			}
		]
	},
	// import 文で .ts ファイルを解決するため
	resolve: {
		extensions: [
			'.ts'
		]
	}
};
