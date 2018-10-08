var RStack = require("./RStack");

//create stack

var myStack = new RStack();

myStack.push(5);

var valArray = [12, 45, 23, 34, 45];

valArray.forEach(element => {
    myStack.push(element);
});


myStack.traverseStack();

myStack.pop();

myStack.pop();

myStack.traverseStack();