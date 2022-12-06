const path = require('path')
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //指定入口文件
    entry: './src/index.ts',
    //指定打包文件所在目录
    output: {
        path: path.resolve(__dirname,'dist'),
        // 打包后的文件名
        filename: "bundle.js"
    },
    // 指定webpack打包要使用的模块
    module: {
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                use: [
                    {
                        loader:"babel-loader",
                        options:{
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome":"107",
                                            "ie":"11"
                                        },
                                        // 指定的corejs版本
                                        "corejs":"3",
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },
    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin()
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts','.js']
    }
}
