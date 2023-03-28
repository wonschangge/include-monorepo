import path from 'path';
import webpack from 'webpack';

// Fix: __dirname is not defined in ES module scope
const __dirname = path.resolve();

export default {
  mode: "development",
  entry: {
    test: './test.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  // plugins: [new webpack.SourceMapDevToolPlugin({})]
};