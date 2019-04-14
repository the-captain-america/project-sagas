import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import extractSass from 'extract-sass';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "dev"
});

export default env => ({
  devtool: env === 'dev' ? '#eval-source-map' : '#source-map',
  entry: {
    app: './src/js/main.js',
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            fallback: "style-loader"
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'index.html'),
      chunks: ['app'],
    }),
    extractSass
  ],
});
