const path = require('path');


module.exports = {
    mode: 'development', //production
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js',
        clean: true,
    },
    //loaders
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    }, 


 //plugins

};
