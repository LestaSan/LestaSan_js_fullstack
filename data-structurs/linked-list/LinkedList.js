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
    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    append(value) {
        const newNode = new LinkedListNode(value);
        // {value, next}
        // 1. 空的 head为空
        // 2. 非空 tail .next null
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    find({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;

        // 头结点是不是要删的？
        while(this.head && this.head.value === value) {
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if(currentNode !== null) {
            while(currentNode.next) {
                if(currentNode.next.value === value) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if(this.tail.value === value) {
            this.tail = currentNode;
        }

        return deleteNode;
        
    }
    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString()
    }
}