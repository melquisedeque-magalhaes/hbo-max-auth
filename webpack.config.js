const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') 
const HtmlWebpackPlugin = require('html-webpack-plugin') 
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path')

const deps = require('./package.json').dependencies
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? "development" : 'production',
    devtool: isDevelopment ? 'eval-source-map' : "source-map",
    entry: {
        main: path.resolve(__dirname, 'src', 'index.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 3001,
    },
    plugins: [
        new CleanWebpackPlugin(), 
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
         // Atualize apenas o que mudou no hot reload
        new webpack.HotModuleReplacementPlugin(),
        // Microfrontend
        new ModuleFederationPlugin({
            name: "hboAuth",
            filename: "remoteEntry.js",
            exposes: {
                "./HboAuth": "./src/routes/index.tsx"
            },
            shared: [{
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"]
                }
            }],
        }),
    ].filter(Boolean),
    module: {
        rules: [
            // JavaScript ou Typescript
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
           // Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // Fonts and SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
}