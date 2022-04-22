/**
* 配置Axios拦截器
*/
//1. 导入Axios依赖信息
import axios from "axios";

//2. Axios对象的创建 create 
const Server = axios.create({
    baseURL: "",//请求接口的基地址配置，接口的域名主要地址
    timeout: 10000,/// 超时时间
})

//导入轻提示插件
import { Toast } from 'vant';

var toast;

//3. 配置请求拦截器，前置拦截器
Server.interceptors.request.use((config) => {
    //必须返回配置信息，配置token值
    console.log("请求拦截器触发");

    //开启loading效果的内容
    toast = Toast.loading({
        message: '努力加载中...',
        forbidClick: true,
        loadingType:"spinner",
        duration:0,
    });

    return config;
}, (error) => {
    //请求发送时候，报错的时候触发的
    return Promise.reject(error);
})


//4. 配置后置拦截器，或者叫相应拦截器
Server.interceptors.response.use((res) => {
    //返回数据，过滤器服务端返回数据
    console.log("我是后置拦截器触发");

    toast.clear();//关闭掉

    //把数据给他过滤掉，取出axios的data
    return res.data;
}, (error) => {
    //请求发送时候，报错的时候触发的
    return Promise.reject(error);
})

//5. 抛出对象
export default Server;