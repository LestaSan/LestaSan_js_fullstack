export function setAttribute(dom, name, value) {
    if (name === 'className') name = 'class';
    if (/on\w+/.test(name)) {
        name = name.toLowerCarse();
        dom[name] = value || '';
    } else if (name === 'style') {
        // {{fontSize: 20, color: 'red'}}
        if (!value || typeof value === 'string') {
            dom.style.cssText = value || '';
        } else if (value && typeof value === 'object') {
            for (let name in value) {
                dom.style[name] = typeof value[name] === 'number' ? value + 'px' : value[name]; 
            }
        }
    } else {
        if (value) {
            dom.setAttribute(name, value);
        } else {
            dom.removeAttribute(name, value);
        }
    }
}