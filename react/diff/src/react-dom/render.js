
/**
 * 将虚拟DOM 变为真实DOM
 * @params vnode 虚拟DOM
 * @return 返回DOM
 * 
 */ 
import { setAttribute } from './dom.js';
function _render (vnode) {
    // 1. 递归 将结点转为DOM，子结点递归，要有出口  即文本节点时，结束
    // 2. 结点类型： 三种：
        // 文本结点 createTextNode() 在递归里结束  return createTextNode()
        // 标签结点 createElement 有attrs设置 children设置(递归 _render)
        // 3. Component类型  render(return jsx)  组件返回jsx  再在外层父结点render()一次
    if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';

    if (typeof vnode === 'string') {
        let textNode = document.createTextNode(vnode);
        return textNode;
    }

    const dom = document.createElement(vnode.tag);
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            const value = vnode.attrs[key];
            setAttribute(dom, key, value);
        })
    }

    if (vnode.children) {
        vnode.children.forEach(child => render(child, dom));
    }

    return dom;
}


export function render (vnode, container) {
    console.log(vnode, container);
    return container.appendChild(_render(vnode));
}

