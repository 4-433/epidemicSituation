/*
 * @Author: Chai chai 2787922490@qq.com
 * @Date: 2022-11-20 16:42:10
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2022-11-20 17:09:45
 * @FilePath: \demo1\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Chai chai 2787922490@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
