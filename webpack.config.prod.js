const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production', //Change this to 'development' when at the time of development
    entry: './src/scripts/app.js',
    output: {
        filename: 'app.[contenthash].js',
        path: path.resolve(__dirname, 'dist', 'js'),
        publicPath: 'dist/js' //By default the bundled js file looks in the root directory for imports
    },
    module: {
        // babel
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',

                                {
                                    useBuiltIns: 'usage', //You can add 'entry' and use manual imports. Specially when you import third party library.
                                    corejs: { version: 3}
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{
                        loader: "style-loader", // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: {
                            sourceMap: true,
                        },
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },
        ]
    },
    devtool: 'cheap-source-map', //Change this setting for faster code
    plugins: [
        new CleanPlugin.CleanWebpackPlugin() //Deletes extra files in the dist folder an rebuilds everthing again
    ],
    devServer: {
        contentBase: './'
    }
};