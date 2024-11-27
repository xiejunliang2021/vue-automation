import axios from "axios"

// ================== 基本配置 ==================
// 后段接口域名的设置
axios.defaults.baseURL = 'http://168.138.5.55:8000'

// 请求成功还是失败的状态
axios.defaults.validateStatus=function (status) {
    return true
  }

axios.defaults.headers.common['Content-Type'] = 'application/json';


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
    // 登录接口
    // loginApi(params){
    //   return axios.post('/api/users/login/', params)
    // },
    loginApi(params) {
      return axios.post('/api/users/login/', params, {
        headers: {
          'Content-Type': 'application/json',  // 确保请求头设置为 JSON 格式
        },
      })
      .then(function (response) {
        console.log("登录成功：", response);
        return response; // 返回 response
      })
      .catch((error) => {
        // 检查后端返回的错误信息
        if (error.response) {
          console.log("请求失败：", error.response.data); // 输出完整的错误信息
          alert(`登录失败：${error.response.data.error || "未知错误"}`); // 提示用户错误原因
        } else {
          console.log("请求失败：", error.message); // 网络错误或其他原因
          alert("请求失败，请检查网络连接");
        }
      });
    },
    
    getTushare() {
      return axios
        .get('/api/basics/basic/', { params: { 'symbol': '601618' } })
        .then(function (response) {
          console.log("请求成功：", response); // 确认这里是否打印成功结果
          return response; // 确保返回 response
        })
        .catch(function (error) {
          console.error("请求失败：", error); // 捕获错误
          throw error; // 将错误抛出，以便调用者处理
        });
    },
    getStockList(){
      return axios.post('/api/basics/get_stock_list/',{params:{ "ts_code": "600110.SH","trade_date": "20241113"}})
    }
}

