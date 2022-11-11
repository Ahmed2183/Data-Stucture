/* Binary Search Tree */
/*In Binary Search Tree: Maximum only 2 child or Left Node < Root Node < Right Node */

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isTreeEmpty() {
        return this.root === null;
    }
}

let tree = new BinaryTree();
console.log(tree.isTreeEmpty());
