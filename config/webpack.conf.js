const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
	module : {}
};

webpackConfig.output = {
	filename: 'bundle.js'
}

webpackConfig.plugins = [
	new webpack.ProvidePlugin({
		riot: 'riot',
		$: 'jquery',
		jQuery: 'jquery',
		Tether: 'tether',
		"window.Tether": 'tether'
	})
];

webpackConfig.module.preLoaders = [{

	test: /\.tag$/,
	exclude: /node_modules/,
	loader: 'riotjs-loader',
	query: { template: 'pug' }

}];

webpackConfig.module.loaders = [{
	test: /\.js$|\.tag$/,
	loader: 'babel-loader',
	exclude: /node_modules/,
	query: {
		presets: ['es2015-riot']
	}
}];

module.exports = webpackConfig;
