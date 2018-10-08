var RQueue = require("./RQueue");

//create queue

var myQueue = new RQueue();

myQueue.enqueue(5);

var valArray = [12, 45, 23, 34, 45];

valArray.forEach(element => {
    myQueue.enqueue(element);
});


myQueue.traverseQueue();

myQueue.enqueue(90);
myQueue.traverseQueue();

myQueue.dequeue();
myQueue.traverseQueue();

myQueue.dequeue();
myQueue.traverseQueue();