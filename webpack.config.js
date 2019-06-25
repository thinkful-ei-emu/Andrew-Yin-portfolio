const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/scripts/main.js',
    about: './src/scripts/about.js',
    contact: './src/scripts/contact.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]_bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/pages/about.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/pages/contact.html',
      chunks: ['contact']
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};