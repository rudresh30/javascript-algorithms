var RListNode = require("./RListNode");

//implementation of linked-list object

class RLinkedList {
    constructor() {
        console.log('creating empty list');
        this.head = null;
        this.tail = null;
    }

    addNode(value) {
        console.log(`adding node ${value}`);
        if (this.head === null) {
            this.head = new RListNode(value);
            this.tail = this.head;
        } else {
            this.tail.next = new RListNode(value);
            this.tail = this.tail.next;
        }
    }

    addHead(value) {
        console.log(`adding head`);
        let newHead = new RListNode(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    traverseList() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    deleteNode(value) {

        console.log(`removing nodes with value ${value}`);
        console.log(`value of tail is ${this.tail.value} `);

        var currentNode = this.head;

        let prevNode = this.head;
        while (currentNode !== null) {

            if (currentNode.value == value) {
                if (currentNode === this.head) {
                    this.head = currentNode.next;
                    continue;
                }
                if (currentNode === this.tail) {
                    console.log(`prevnode value is ${prevNode.value}`);
                    this.tail = prevNode;
                    this.tail.next = null;
                    break;
                }
                prevNode.next = currentNode.next;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    deleteTail() {
        console.log('performing dequeue');
        let currentNode = this.head;
        let prevNode = this.head;
        while (currentNode.next !== null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
        this.tail = prevNode;
    }

    deleteHead() {
        console.log(`popping first value`);
        let headNode = this.head;
        this.head = this.head.next;
        headNode.next = null;
        return headNode.value;
    }
}

module.exports = RLinkedList;