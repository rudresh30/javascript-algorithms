var RBSTTree = require("./RBSTTree");

//create empty tree

var myTree = new RBSTTree();

//populate tree

var treeArray = [10, 5, 15, 17, 2, 7];

treeArray.forEach((element) => {
    myTree.addNode(element);
});

//traverse tree

myTree.traverseTree();