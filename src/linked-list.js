const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (!this.length) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head) {
            return this._head.data;
        } else {
            return null
        }
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        } else {
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

        var newNode,
            currentNode = this._head,
            counter = 0,
            errorMessage = 'Wrong index!';

        if (index < 0 || index > this.length) {
            throw new Error(errorMessage);
        }
        newNode = new Node(data)
        if (index === 0) {
            if (this.length) {
                this._head = newNode;
                this._head.next = currentNode;
                currentNode.prev = this._head;

            } else {
                this._head = newNode;
                this._tail = newNode;
            }

        } else if (index === this.length) {
            currentNode = this._tail;
            this._tail.next = newNode;
            node.prev = currentNode;
            this._tail = newNode;

        } else {
            while (counter < index) {
                currentNode = currentNode.next;
                counter++;
            }

            currentNode.prev.next = newNode;
            currentNode.prev = newNode;
            newNode.next = currentNode;
            newNode.prev = currentNode.prev;
        }

        this.length++;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var node = this._head;
        var i = 0;
        if (this.length > 1 && index > 0 && index <= this.length) {
            while (i < index) {
                node = node.next;
                i++;
            }
            var nodeToDelete = node;
            nodeToDelete.prev.next = nodeToDelete.next;
            nodeToDelete.next.prev = nodeToDelete.prev;
            this.length--;
        }
        return this;
    }

    reverse() {
        var currentNode = this._head,
            tmp = null;

        this._tail = this._head;

        while (currentNode !== null) {
            tmp = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = tmp;

            if (currentNode.prev === null) {
                this._head = currentNode;
            }
            currentNode = currentNode.prev;
        }

        return this;

    }

    indexOf(data) {
        var node = this._head,
            i = 0,
            index = -1;
        while (i != this.length) {
            if (node.data == data) {
                index = i;
                break;
            }
            node = node.next;
            i++;
        }
        return index;
    }
}


module.exports = LinkedList;