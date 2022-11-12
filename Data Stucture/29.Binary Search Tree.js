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
                this.insertNode(root.left, newNode);  // --> Recursion of insertNode function, insert into like this root.left.left and soo on...
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

    searchNode(root, val) {
        // console.log(root.left);
        if (root === null) {
            return false;
        }
        else if (root.value === val) {
            return true;
        }
        else if (root.value > val) {
            return this.searchNode(root.left, val);
        }
        else {
            return this.searchNode(root.right, val);
        }
    }

    /*  Depth First Search */
    preOrder(root) {
        if (root) {
            console.log("Pre-Order:", root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log("Post-Order:", root.value);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log("In-Order:", root.value);
            this.inOrder(root.right);
        }
    }

    /* Breadth First Search */
    breadthFirst() {
        let queue = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            console.log("Breadth First Search:",current.value);
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

// console.log(tree.searchNode(tree.root, 10));
// console.log(tree.searchNode(tree.root, 30));
// console.log(tree.searchNode(tree.root, 100));

// tree.preOrder(tree.root);
// tree.postOrder(tree.root);
// tree.inOrder(tree.root);

// tree.breadthFirst();

// console.log(tree.isTreeEmpty());

// console.log(tree);
