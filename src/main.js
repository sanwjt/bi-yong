/*
 * @Author: your name
 * @Date: 2020-07-11 16:41:27
 * @LastEditTime: 2020-07-11 22:47:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bi-yong/src/main.js
 */ 
import Vue from 'vue'
import Vant from 'vant';
import App from './App.vue'
import router from './router';
import './views/reset.css';
import 'vant/lib/index.css';



import './utils/flexible';
Vue.use(Vant);
Vue.config.productionTip = false

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
