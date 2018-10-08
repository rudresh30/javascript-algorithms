var RTreeNode = require("./RTreeNode");

class RBSTTree {
    constructor() {
        //create an empty tree with root pointing to null and no nodes
        this.root = null;
    }

    addNode(value) {
        //add first value in tree
        if (this.root === null) {
            let newNode = new RTreeNode(value);
            this.root = newNode;
            console.log(`first node added to the tree`);
            return true;
        } else {
            //this is not a first node that is being added
            var currNode = this.root; //start with root node
            //loop until currNode does not equal null
            while (currNode) {
                if (currNode.value == value) {
                    return null; //value matches existing node; no need to add a new node
                } else if (value < currNode.value) {
                    if (currNode.left === null) {
                        let newNode = new RTreeNode(value);
                        currNode.left = newNode;
                        console.log(`node added`);
                        return true;
                    } else {
                        currNode = currNode.left; //traverse left
                    }
                } else if (value > currNode.value) {
                    if (currNode.right === null) {
                        let newNode = new RTreeNode(value);
                        currNode.right = newNode;
                        console.log(`node added`);
                        return true;
                    } else {
                        currNode = currNode.right;
                    }
                }
            }
        }


    }

    traverseTree(currNode = this.root) {

        if (currNode === null) {
            return null;
        }

        var left = this.traverseTree(currNode.left);
        var right = this.traverseTree(currNode.right);
        console.log(currNode.value);

    }
}

module.exports = RBSTTree;