const webpack=require("webpack");
const mockdata=require("./mock/data.json")
const TerserPlugin=require("terser-webpack-plugin");

module.exports={
    publicPath:process.env.NODE_ENV==='procuction'?'/vuebase/':"/",
    outputDir:"dist",
    // assetsDir:"static", 
    devServer:{
        host:"127.0.0.1",
        hot:true,
        open:true,
        port:4000,
        // before(app){
        //     app.get('/adv/info', function(req, res) {
        //       res.json(mockdata);
        //     });
        // },
        proxy:{
            "/m":{// 代理的前缀标识
                target:"https://m.lagou.com",// 请求的服务
                changeOrigin:true,
                pathRewrite:{
                    "^/m":""
                }
            }
        }
    },
    lintOnSave: false,//关闭eslint
    chainWebpack:(config)=>{
         
    },
    configureWebpack:{
        plugins:[
            
        ],
       
    },
   
}