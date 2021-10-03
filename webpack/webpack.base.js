const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    popup: path.join(__dirname, '../src/popup.ts'),
    options: path.join(__dirname, '../src/options.ts'),
    'content-script': path.join(__dirname, '../src/content-script.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'common',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    // 将 public 的内容复制到 dist 下面. 由于 output 是 dist/js, to 为 ../, 因此最终会复制到 dist 目录
    new CopyPlugin(
      [
        {
          from: '.',
          to: '../',
        },
      ],
      {
        context: 'public',
      },
    ),
    new CleanWebpackPlugin(),
  ],
};
