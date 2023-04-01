const path = require('path');


module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist')
        },
        port: 8080
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }      
}