vue -> MV-VM
双向绑定v-model
如：将input改变时的数据绑定到data中
    通过操作data中数据：this.inputValue = ''
    来控制页面数据显示
    没有直接操作DOM
    即可更新数据
    通过操控数据层来改变页面

传统的MVP  model(数据层)->presenter(控制层，相关业务逻辑)->view(视图层，DOM展示)
见jquery
view中绑定了事件 -> 控制层相关事件调用 -> 请求模型层进行数据请求(数据层 )

MVVM  model --  viewModel  -- view
viewModel与P层不同，不需要自己编写，vue自带
即 我们只需要关注M和V层的实现，无需关注VM层实现