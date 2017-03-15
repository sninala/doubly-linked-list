const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if(! this.length){
            this._head = node;
            this._tail = node;
        } else{
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if(this._head){
            return this._head.data;
        } else{
            return null
        }
    }

    tail() {
        if(this._tail){
            return this._tail.data;
        } else{
            return null;
        }
        
    }

    at(index) {
        if (this.length < index) {
            throw new Error("The index of the item that you have selected more than the length of the list.");
        } else {
            var node = this._head;
            var i = 0;
            while (i != index) {
                node = node.next;
                i++;
            }
            return node.data;
        }
    }

    insertAt(index, data) {
       if (index < this.length) {
            var node = this._head;
            var i = 0;
            while (i != index) {
                console.log(i);
                console.log(node.data);
                node = node.next;
                i++;
            }
            var nodePrev = node.prev;
            var nodeNext = node.next;
           
            var newNode = new Node(data);
            newNode.prev = nodePrev;
            newNode.next = nodeNext;
            node.prev = newNode;
            if(node.next){
                node.next = node.next.next;
            }else{
                node.next = null;
            }
            
            this.length++;
            return this;
        }
            
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        var node  = this._head;
        var i = 0;
        while (i != index) {
            node  = node.next;
            i++;
        }
        var nodeToDelete = node;
        nodeToDelete.next.prev = nodeToDelete.prev;
        nodeToDelete.prev.next = nodeToDelete.next;
        this.length--;
    }

    reverse() {
        var node_buf = {
            value: null,
            next: null,
            prev: null,
        }

        var node_head = this._head;
        var node_tail = this._tail;

        var i = 0;

        while (i < Math.floor(this.length / 2)) { 
            node_buf.data = node_tail.data;
            node_tail.data = node_head.data;
            node_head.data = node_buf.data;
            node_head = node_head.next;
            node_tail = node_tail.prev;
            i++;
        }

        return this;
    }

    indexOf(data) {
        var node = this._head;
        var i = 0;
        while (i != this.length) {
            if (node.data == data) {
                return i;
            }
            node = node.next;
            i++;
        }
        return -1;
        
    }
}


module.exports = LinkedList;
