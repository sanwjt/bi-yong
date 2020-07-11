/*
 * @Author: your name
 * @Date: 2020-07-11 17:33:38
 * @LastEditTime: 2020-07-11 17:49:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bi-yong/src/assets/router.js
 */ 
import Vue from 'vue';
import Router from 'vue-router';
import index from './views';
import register from './views/register'


Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/index',
    name: 'index',
    component: index,
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
