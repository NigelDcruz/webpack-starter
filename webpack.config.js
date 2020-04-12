const path = require('path');
const CleanPlugin = require ('clean-webpack-plugin');

module.exports = {
    mode: 'development', //Change this to 'production' when you're done with development
    entry: './src/scripts/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname,'dist','js'),
        publicPath: 'dist/js' //By default the bundled js file looks in the root directory for imports
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new CleanPlugin.CleanWebpackPlugin() //Deletes extra files in the dist folder an rebuilds everthing again
    ],
    devServer: {
        contentBase: './'
    }
};
