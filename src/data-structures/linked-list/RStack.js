var RLinkedList = require('./RLinkedList');

class RStack {

    constructor() {
        this.stack = new RLinkedList();
    }

    push(value) {
        console.log(`pushing on stack ${value}`);
        this.stack.addNode(value);
    }

    pop() {
        let myVal = this.stack.deleteHead();
        console.log(myVal);
    }

    traverseStack() {
        this.stack.traverseList();
    }

}

module.exports = RStack;