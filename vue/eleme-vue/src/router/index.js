import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/pages/home'
// 当去到home页面时引入
const home = () => import('@/pages/home')
const login = () => import('@/pages/login')
const city = () => import('@/pages/city')
const msite = () => import('@/pages/msite')
// lazyload

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login,
      meta: {
        keepalive: true
      }
    },
    {
      path: '/city/:cityid',
      component: city
    },
    {
      path: '/msite',
      component: msite
    }
  ]
})
