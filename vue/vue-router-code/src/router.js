import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Foo from '@/views/Foo'
// Vue是一个MVVM框架
// 生态， VueRouter Vuex Element Axios
Vue.use(VueRouter);
// 路由大管家
const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/foo',
        component: Foo
      }
    ]
  })

  export default router