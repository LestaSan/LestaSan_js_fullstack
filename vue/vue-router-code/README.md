Vue 用于开发SPA，路由接管一切

页面/views 跟 route url 相匹配

router-link 取代a
 VueRouter提供的组件   
 Vue.use(VueRouter提供的组件) 全局 

route 前端路由 区分后端路由 ngnix apache 等配置的后端路由
前端路由解决的是SPA 
url切换， 页面不会刷新
history API  利用pushState() onpopState() 移除之前的组件，
更新新的组件  它的格式和传统的后端url 是一样的 /foo
缺点：兼容性 
二 hash模式
在url后面加描点 ie8以后就不会刷新页面了，同样可以得到事件
同一个页面，不同状态(对应url)