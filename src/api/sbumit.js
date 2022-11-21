/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-21 17:50:15
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2022-11-21 17:59:46
 * @FilePath: \demo1\src\api\sbumit.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
 */
import serve from "./request"

export function submitR(data) {
    return serve({
        url: '/system/Fill',
        method: 'post',
        data
    })
}