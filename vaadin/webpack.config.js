const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = function(env, { mode }) {
    const production = mode === 'production';
    return {
        mode: production ? 'production' : 'development',
        devtool: production ? 'source-map' : 'inline-source-map',
        entry: {
            app: ['./src/app.ts']
        },
        output: {
            filename: 'bundle.js',
            publicPath:'/'
        },
        resolve: {
            extensions: ['.ts', '.js'],
            modules: ['src', 'node_modules']
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.ts$/i,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ],
                    exclude: /node_modules/
                }
            ]
        }
    }
}