/*
 * @Author: your name
 * @Date: 2020-07-11 17:33:38
 * @LastEditTime: 2020-07-12 18:26:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bi-yong/src/assets/router.js
 */ 
import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home';
import register from './views/register'


Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
        title: '首页'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {
        title: '企业报名'
    }
  },
],
});
