const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
  mode:'development',
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    homepage: path.resolve(__dirname, './src/homepage.js'),
    favorites: path.resolve(__dirname, './src/favorites.js')
  },
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  // 4
  // Add plugins for webpack here
  plugins: [
    new CleanWebpackPlugin,
    new HtmlWebpackPlugin({
      title: 'Login',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'Homepage',
      template: path.resolve(__dirname, './src/homepage.html'),
      filename: 'homepage.html',
      chunks: ['homepage']
    }),
    new HtmlWebpackPlugin({
      title: 'Favorites',
      template: path.resolve(__dirname, './src/favorites.html'),
      filename: 'favorites.html',
      chunks: ['favorites']
    }),
  ],
  module: {
        // configuration regarding modules
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/, // files to exclude
            use: ['babel-loader'],
          },
          {
            test: /\.tsx?/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
         // CSS and SASS
          {
            test: /\.(scss|css)$/,  // load files that end with scss and css
            use: [
           'style-loader',
           'css-loader',
           'sass-loader',
           ],
          },
        ],
  },
  resolve: {
        // options for resolving module requests
        extensions: ['*', '.js', '.ts'], // files to load
  },
};
