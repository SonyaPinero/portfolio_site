var webpack = require('webpack');

module.exports = [{
  entry: ['babel-polyfill', __dirname + '/server.js'],
  output: {
    path: __dirname + '/build',
    libraryTarget: 'commonjs2',
    filename: 'server.js'
  },
  target: 'node',
  devTool: 'source-map',
  cache: true,
  debug: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
        query: {
          presets: ['stage-0', 'react', 'es2015']
        }
      },
      {
        test: /\.json$/,
        exclude: 'node_modules',
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        exclude: 'node_modules',
        loader: 'markup-inline'
      },
      {
       test: require.resolve('snapsvg'),
       exclude: 'node_modules',
       loader: 'imports-loader?this=>window,fix=>module.exports=0'
      }
    ]
  },
  plugins: []
},
{
  entry: ['babel-polyfill', __dirname + '/app.js'],
  output: {
    path: __dirname + '/build/public',
    filename: 'app.js'
  },
  target: 'web',
  devTool: 'source-map',
  cache: true,
  debug: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
        query: {
          presets: ['stage-0', 'react', 'es2015']
        }
      },
      {
        test: /\.json$/,
        exclude: 'node_modules',
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        exclude: 'node_modules',
        loader: 'markup-inline'
      },
      {
       test: require.resolve('snapsvg'),
       exclude: 'node_modules',
       loader: 'imports-loader?this=>window,fix=>module.exports=0'
      }

    ]
  },
  plugins: []
}];