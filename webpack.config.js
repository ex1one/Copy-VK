const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'css', 'scss', 'json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new HTMLWebpackPlugin({template: "./src/index.html"}),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|svg)/,
        use: ['file-loader']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
};



