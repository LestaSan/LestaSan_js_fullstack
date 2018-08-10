虚拟DOM 
1. state 数据
2. jsx 模板
3. 数据 + 模板  结合 --> 生成真实DOM来显示
4. state 发生改变
5. 数据 + 模板  结合 --> 生成真实DOM  替换原来DOM

缺陷：
第一次生成了一个完整DOM片段
第二次生成了一个完整DOM片段
第二次的DOM替换了第一次的DOM   非常耗性能

改进：
1. state 数据
2. jsx 模板
3. 数据 + 模板  结合 --> 生成真实DOM来显示
4. state 发生改变
5. 数据 + 模板  结合 --> 生成真实DOM  并不直接替换原来DOM
6. 新的DOM 与原始DOM 作比对  找差异
7. 找出input框发生了变化
8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素

缺陷：性能提升并不明显

虚拟DOM方案：
1. state 数据
2. jsx 模板
3. 数据 + 模板  结合 --> 生成真实DOM来显示
4. 生成虚拟DOM (虚拟DOM就是一个js对象，用它来描述真实DOM)  (有一点性能损耗)
例子：
真实DOM： <div id="abc"><span>hello world</span></div>
虚拟DOM(对象)：['div', {id: 'abc'}, ['span', {}, 'hello world']]
5. state 发生变化
6. 数据 + 模板 生成新的虚拟DOM：['div', {id: 'abc'}, ['span', {}, 'bye bye']]
7. 比较原始虚拟DOM与新的虚拟DOM的区别 找到区别是span中的内容
8. 直接操作DOM, 改变span中的内容

