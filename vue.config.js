const mockdata=require("./mock/data.json")
module.exports={
    publicPath:process.env.NODE_ENV==='procuction'?'/vuebase/':"/",
    outputDir:"dist",
    assetsDir:"static",
    devServer:{
        host:"127.0.0.1",
        hot:true,
        open:true,
        port:4000,
        before(app){
            app.get('/adv/info', function(req, res) {
              res.json(mockdata);
            });
        }
    },
    lintOnSave: false,//关闭eslint
}