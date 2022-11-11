/* Binary Search Tree */
/*In Binary Search Tree: Maximum only 2 child or Left Node < Root Node < Right Node */

class Node {
    constructor(val) {
        this.value = val;    // --> Set root value of tree
        this.left = null;   // --> In tree first time left is empty/null
        this.right = null;  // --> In tree first time right is empty/null
    }
}

class BinaryTree {
    constructor() {
        this.root = null;  // --> In tree first time root is empty/null
    }

    isTreeEmpty() {
        return this.root === null;
    }

    makeTree(val) {
        let newNode = new Node(val);  // --> Instance/Object of Node Class
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        // console.log(root.value)
        // console.log(newNode.value)

        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);  // --> Recursion of insertNode function
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    }

}

let tree = new BinaryTree();

tree.makeTree(20);
tree.makeTree(10);
tree.makeTree(5);
tree.makeTree(30);
tree.makeTree(40);
tree.makeTree(23);

// console.log(tree.isTreeEmpty());
console.log(tree);
