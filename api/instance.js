import axios from "axios"
let instance=axios.create({
    timeout:5000
})
instance.interceptors.request.use(config=>{
     console.log(config)
    return config
})
instance.interceptors.response.use(function (res) {
    console.log("公共",res.data)
    return res;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default instance