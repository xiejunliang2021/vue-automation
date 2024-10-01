import axios from "axios"

// ================== 基本配置 ==================
// 后段接口域名的设置
axios.defaults.baseURL = 'http://168.138.11.4:8000'

// 请求成功还是失败的状态
axios.defaults.validateStatus=function (status) {
    return true
  }

// 自动携带cookie
axios.defaults.withCredentials=true

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });



// 后端请求的接口
export default {

}

