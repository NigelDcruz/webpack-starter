const path = require('path');
const CleanPlugin = require ('clean-webpack-plugin');

module.exports = {
    mode: 'production', //Change this to 'development' when at the time of development
    entry: './src/scripts/app.js',
    output: {
        filename: 'app.[contenthash].js',
        path: path.resolve(__dirname,'dist','js'),
        publicPath: 'dist/js' //By default the bundled js file looks in the root directory for imports
    },
    devtool: 'cheap-source-map', //Change this setting for faster code
    plugins: [
        new CleanPlugin.CleanWebpackPlugin() //Deletes extra files in the dist folder an rebuilds everthing again
    ],
    devServer: {
        contentBase: './'
    }
};
