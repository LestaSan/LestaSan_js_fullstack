Redux知识点
- store是唯一的
- 只有store能改变自己的内容
  reducer深拷贝了store并返回新的newStore
  store根据newStore更新数据
- reducer必须是纯函数
  纯函数概念：给定固定的收入，就一定会有固定的输出，而且不会有副作用

Redux中核心API
1. createStore  --> 创建store
2. store.dispatch --> 派发(传递)action
3. store.getState --> 获取store中内容
4. store.subscribe --> 订阅store的改变  -->  接受一个回调函数，只要store改变，回调函数执行


Redux的中间件
要点：是action与store之间的中间件
 没有中间件  action只能是一个对象
 有了中间件 action可以是函数
 ---------------------------------------------------
 action --> store.dispatch(action) --> store
 所以中间件就是对dispatch方法的封装(升级)