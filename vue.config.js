module.exports={
    publicPath:process.env.NODE_ENV==='procuction'?'/vuebase/':"/",
    outputDir:"dist",
    assetsDir:"static",
    configureWebpack:config=>{
        // config.module.rules.push(
        //     {
        //         test:/\.css/,
        //         use:['style-loader','css-loader']
        //     },
        //     {
        //         test:/\.vue/,
        //         use:['vue-loader']
        //     }
        // )
    },
    devServer:{
        hot:true,
        open:true
    },

    lintOnSave: false,//关闭eslint
}