var RLinkedList = require("./RLinkedList");

//create list

var myList = new RLinkedList();

myList.addNode(45);

var valArray = [12, 45, 23, 34, 45];

valArray.forEach(element => {
    myList.addNode(element);
});


myList.traverseList();

myList.addHead(0);

myList.traverseList();

myList.deleteNode(45);

myList.traverseList();

