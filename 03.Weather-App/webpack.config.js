const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
 mode: 'development', //production
 entry:{
    main: path.resolve(__dirname, 'src/index.js'),
 },
 output:{
     path: path.resolve(__dirname,'dist'),
     filename:'[name].bundle.js',
     clean: true,
 },
 //loaders

 //plugins
Plugins: [HtmlWebpackPlugin({
    title: 'just a Demo',
    filename: 'index.html',
    template: path.resolve(__dirname, 'index.html')
}),
],
};
