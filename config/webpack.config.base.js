const path = require("path");
// 引入插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 清理 dist 文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin");
// 抽取 css
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 引入多页面文件列表
const config = require("./config");
// var precss = require('precss');
// var cssnext = require('cssnext');
// var autoprefixer = require('autoprefixer');
// var cssnano = require('cssnano');
// 通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = [];
var webpack = require('webpack');
// 入口文件集合
let Entries = {}

// 生成多页面的集合
config.HTMLDirs.forEach((page) => {

    const htmlPlugin = new HTMLWebpackPlugin({
        filename: `${page}.html`,
        template: "html-withimg-loader!" + path.resolve(__dirname, `../app/html/${page}.html`),
        chunks: [page, 'commons'],

    });

HTMLPlugins.push(htmlPlugin);
Entries[page] = path.resolve(__dirname, `../app/js/${page}.js`);
})
module.exports = {
    entry:Entries,
    devtool:"cheap-module-source-map",
    output:{
        filename:"js/[name].js",
        path:path.resolve(__dirname,"../dist")
    },
    resolve: {
        alias: {
            jquery: 'jquery/dist/jquery.min.js'
        }
    },
    // 加载器
    module:{
        rules:[
        {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader:"file-loader",
                    options:{
                 // 打包生成图片的名字
                 name:"[name].[ext]",
                 // 图片的生成路径
                 outputPath:config.imgOutputPath,
                 publicPath: config.imgPublicPath
                }
                }
            },
           {
            test: /\.(scss|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use:[
                    'css-loader','postcss-loader','sass-loader'
                ]
            })
        },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            { test: /\.html$/, loader: 'html-loader' },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:{
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: config.fontOutputPath,
                        publicPath: '/'
                    }
                }
            }
        ],
    },
    plugins:[
        // 自动清理 dist 文件夹
        //MyPlugin,
        new CleanWebpackPlugin(["dist"]),
        // 将 css 抽取到某个文件夹
        // new ExtractTextPlugin(config.cssOutputPath),
        new ExtractTextPlugin("css/[name].css"),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        // 自动生成 HTML 插件
        // HTMLPlugins
        ...HTMLPlugins



        // packCSS
        // new ExtractTextPlugin(config.cssOutputPath),
    ]

}



