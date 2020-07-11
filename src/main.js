/*
 * @Author: your name
 * @Date: 2020-07-11 16:41:27
 * @LastEditTime: 2020-07-11 18:28:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bi-yong/src/main.js
 */ 
import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router';
import 'ant-design-vue/dist/antd.css';
import './views/reset.css';


import './utils/flexible';

Vue.config.productionTip = false
Vue.use(Antd);

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
