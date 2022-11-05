/* Linked List */
class List {
    constructor(data) {
        this.head = {  // ---> Object
            value: data,
            next: null,
        };
        this.tail = this.head;  // ---> In this.tail we have memory location of this.head object called object copy, tail mai change krna par head mai bi change hoga
        this.size = 1;  // ---> For Check size
    }

    appendNode(nodeData) { // ---> Function
        let newNode = { // ---> Object
            value: nodeData,
            next: null
        };
        this.tail.next = newNode;  // ---> Assign into this.head in next
        this.tail = newNode;  // --->Assign into this.tail, jo last node hogi wohi tail hoga
        this.size++; // ---> Increase size
    }

    traversing() {  // ---> Read All Nodes
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size) {
            console.log(currentNode);
            currentNode = currentNode.next;
            counter++;
        }
    }

    // updateNode(node, value) {  // ---> Update Node
    //     let counter = 0;
    //     let currentNode = this.head;
    //     while (counter < this.size) {
    //         if (currentNode.value === node) {
    //             currentNode.value = value;
    //             console.log(`Node ${node} updated to ${value} :`,list);
    //         }
    //         currentNode = currentNode.next;
    //         counter++;
    //     }
    // }

    deleteNode(index) {
        let counter = 1;
        let leadNode = this.head;   // ---> leadNode means head node sa phela wali node
        // console.log("First Time Head Node is:", this.head);
        // console.log("First Time Lead Node is:", leadNode);
        if (index === 1) {  // ---> If index 1 hoga tu head index 2 hojai ga r leadNode index 1
            this.head = this.head.next;
            // console.log("If index equal to 1 Head Node is:", this.head);
            // console.log("If index equal to 1 Lead Node is:", leadNode);
        }
        else {
            while (counter < index - 1) {
                leadNode = leadNode.next;
                counter++;
            }
            let nextNode = leadNode.next.next;
            leadNode.next = nextNode;
            console.log(leadNode)
        }
    }
}

let list = new List(100);

list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);

// list.updateNode(300, 1000);

list.deleteNode(4);

// list.traversing();

console.log(list);