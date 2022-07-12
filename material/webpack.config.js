const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = function(env, { mode }) {
    const production = mode === 'production';
    return {
        mode: production ? 'production' : 'development',
        devtool: production ? 'source-map' : 'inline-source-map',
        entry: {
            app: ['./src/app.js', './src/app.scss']
        },
        output: {
            filename: 'bundle.js',
            publicPath:'/'
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'bundle.css',
                            },
                        },
                        {loader: 'extract-loader'},
                        {loader: 'css-loader'},
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        autoprefixer()
                                    ]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                                webpackImporter: false,
                                sassOptions: {
                                    includePaths: ['./node_modules'],
                                },
                            },
                        }
                    ],
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }
            ],
        },
    }
}