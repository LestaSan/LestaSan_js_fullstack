vue-cli webpack 用来开发SPA(单页应用程序)
js 接管路由  路由映射组件
所有的都在webpack打包的一个bundle.js
优点：用户体验提升
缺点：SEO 极差  (搜索引擎友好度(优化))

SPA #root
SEO 只能分析html 

不依赖SEO的

SEO nuxt  PC


ssr  server side rendering (服务器端渲染)

template compile html server 端
koa express html res.send ctx.body = html
client  mounted