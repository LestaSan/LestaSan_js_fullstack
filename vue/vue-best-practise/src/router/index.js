import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
import TimeEntries from '@/components/TimeEntries'
import LogTime from '@/components/LogTime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/time-entries',
      component: TimeEntries,
      children: [
        {
          // 子路由不加/  /表示跟路由
          path: 'log-time',
          component: LogTime
        }
      ]
    }
  ]
})
