// 前端工作流 webpack parcel babel eslint
import { setAttribute } from './dom';

function _render (vnode) {
    // console.log(vnode);
    if (typeof vnode === 'string') {
      const textNode = document.createTextNode(vnode);
      return textNode
    }

    if (typeof vnode.tag === 'function') {
      // 在jsx标签 <Counter />
      // 普通标签就会来到_render执行
      // 不是普通的， 它是function  Component
      // 实例化时  在生命周期里调用render方法
      // console.log(vnode);
      const component = createComponent(vnode.tag, vnode.attrs);
      setComponentProps(component, vnode.attrs);
      return component.base;
    }
  
    if (vnode.attrs) {
      Object.keys(vnode.attrs).forEach(key => {
        const value = vnode.attrs[key];
        // 不是简单的setAttribute 而是 onClick className {obj}
        setAttribute(dom, key, value);
      });
    }
    const dom = document.createElement(vnode.tag);
    vnode.children.forEach(child =>  render(child, dom));
    return dom;
}

function setComponentProps(component, props) {
  renderComponent(component);
}


function createComponent (component, props) {
  // console.log(component, props);
  let inst;
  if (component.prototype && component.prototype.render) {
    inst = new component(props);
  }
  return inst;
}

export function renderComponent (component) {
  let base;
  const renderer = component.render();
  base = _render(renderer);
  component.base = base;
}

export function render (vnode, container) {
    return container.appendChild(_render(vnode));
}