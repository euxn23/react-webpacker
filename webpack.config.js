const path = require('path')

module.exports = {
  entry: {
    'react-webpacker': './test/dummy/react-webpacker.js',
    'components/MyComponent': './test/dummy/components/MyComponent.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'test', '__build__', 'packs'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader', options: { presets: ['env', 'react'] } }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
