const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry:{ bundle:path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  module:{
    rules:[
        {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader'],
        },
        {
            test:/\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
        title:'Restaurant App',
        filename:'index.html',
        template: 'src/template.html',
        
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  }
};