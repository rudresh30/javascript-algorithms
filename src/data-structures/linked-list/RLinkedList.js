import RListNode from "./RListNode";

//implementation of linked-list object

export default class RLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(value) {
        if (this.head === null) {
            this.head = new RListNode(value);
        } else {
            this.tail.next = new RListNode(value);
            this.tail = this.tail.next;
        }
    }

    addHead(value) {
        let newHead = new RListNode(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    traverseList() {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}