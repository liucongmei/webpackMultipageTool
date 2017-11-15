# webpackMultipageTool
基于webpack和node搭建多页html的脚手架。

分生产环境和开发环境，生产环境可进行代码压缩，自动注入依赖。

#安装方法

1. npm install 安装依赖

2. npm run dev 开发环境

3. npm run build 导出生产环境


#使用方法

1. 在app目录进行开发，按照正常的html逻辑处理即可

2. 在app/html 目录和 app/js 目录里创建同名的js文件和html文件

3. 图片和字体按照相对路径处理即可

4. 设置config/config.js里的HTMLDirs里为html文件的名字，运行npm run build即可

#文件目录

app -> 开发目录

dist -> 导出的生产环境的目录

config -> 相关的配置信息

fonts -> 字体和图标文件、


#说明

默认已经安装jquey 和 bootstrap