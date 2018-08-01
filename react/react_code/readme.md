虚拟DOM ? VNode  Virtual DOM
mvvm 封装了dom层
dom太耗内存
vnode + diff算法 来解决
jsx语法
用js对象描述html结构
JSX背后隐含着VNode的真相
React.createElement(
    h1 第一个参数  ele = document.createElement()
    attributes 第二个参数 ele.setAttribute(key, val),
    children 第三个参数  
        1. 文本结点  textnode
        2. node结点 递归一下
)

虚拟DOM 描述 JSON
<h1 className="title">标题<span>副标题</span></h1> 
VNode = {
    tag: "h1",
    atts: {
        className: "title"
    },
    children: [
        '标题'，
        递归 VNode
    ]
}

var title = React.createElement(
  "h1",
  { className: "title" },
  "\u6807\u9898",
  React.createElement(
    "span",
    null,
    "\u526F\u6807\u9898"
  )
);