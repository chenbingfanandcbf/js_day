import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    //首页
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue')
    },
    //新建居民档案
    {
      path: '/jumin',
      name: 'jumin',
      component: () => import( './views/jumin.vue')
    },
    //关联家人信息
    {
      path: '/guanlian',
      name: 'guanlian',
      component: () => import( './views/guanlian.vue')
    },
    //家庭成员
    {
      path: '/jiating',
      name: 'jiating',
      component: () => import( './views/jiating.vue')
    },
    //签约
    {
      path: '/qianyue',
      name: 'qianyue',
      component: () => import( './views/qianyue.vue')
    },
    //结果
    {
      path: '/jieguo',
      name: 'jieguo',
      component: () => import( './views/jieguo.vue')
    },
    //待处理签约的申请
    {
      path: '/shenqing',
      name: 'shenqing',
      component: () => import( './views/shenqing.vue')
    },
    //待处理服务申请
    {
      path: '/fuwu',
      name: 'fuwu',
      component: () => import( './views/fuwu.vue')
    },
  ]
})
