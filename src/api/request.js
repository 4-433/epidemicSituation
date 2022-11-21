/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-21 17:49:27
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2022-11-21 17:55:12
 * @FilePath: \demo1\src\api\request.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
 */
import axios from "axios";

const server = axios.create({
    baseURL: "http://121.4.29.27:8080/dev",
    responseType: "json",
    timeout: 60000
})
//请求拦截器
server.interceptors.response.use(resp => {
    return Promise.resolve(resp);
});
export default server;