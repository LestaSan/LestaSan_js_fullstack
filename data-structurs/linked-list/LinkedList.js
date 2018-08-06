import LinkedListNode from './LinkedListNode';
// 形成链表?  结点链起来？
// 数据集合从开始到结束显示出来  
// [] next 
// head 
//     next
//     .....
// tail

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    toArray() {
        const nodes = [];
        let currentNode = this.head;
        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString()
    }
}