const CracoLessPlugin = require('craco-less');

module.exports = {
	 //按需引入
     babel: {
        plugins: [
           [
               "import", 
               {
                   "libraryName": "antd",
                   "libraryDirectory": "es",
                    "style": true //设置为true即是less
                }
            ]
        ]
    },
    //自定义主题
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
                lessLoaderOptions: {
                    lessOptions: {
                  		 //颜色即为自定义颜色
                        modifyVars: { 
                            '@primary-color': 'rgb(24, 144, 255)' ,
                            "@font-size-base": "16px",
                        },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}