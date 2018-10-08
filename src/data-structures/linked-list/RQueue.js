var RLinkedList = require("./RLinkedList");

class RQueue {
    constructor() {
        console.log(`creating queue`);
        this.linkedlist = new RLinkedList();
    }

    enqueue(value) {
        this.linkedlist.addHead(value);
    }

    dequeue() {
        this.linkedlist.deleteTail();
    }

    traverseQueue() {
        this.linkedlist.traverseList();
    }


}

module.exports = RQueue;