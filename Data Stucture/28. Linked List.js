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

    appendNode(nodeData) { // ---> Function to add node in last
        let newNode = { // ---> Object
            value: nodeData,
            next: null
        };
        this.tail.next = newNode;  // ---> Assign into this.head in next
        this.tail = newNode;  // --->Assign into this.tail, jo last node hogi wohi tail hoga
        this.size++; // ---> Increase size
    }

    // insertNode(index,value) {
    //     let counter = 1;
    //     let currentNode = this.head;
    //     while(counter > index) {
    //         counter++;
    //         currentNode = currentNode.next;
    //     }
    //     let nextNode = currentNode.next;
    //     currentNode.next = {
    //         value:value,
    //         next:nextNode
    //     }
    // }

    insertNode(Nodedata, pos) {  // ---> Function to insert node
        let lead = this.head;
        let counter = 1;

        let newNode = {
            value: Nodedata,
            next: null
        }
        if (pos == 1) {
            newNode.next = lead;
            this.head = newNode;
        }
        else if (pos == this.size) {

            this.appendNode(Nodedata);
            this.size--;
        }
        else {
            while (counter < pos - 1) {

                lead = this.head.next;
                counter++;
            }
            let nextOfLead = lead.next;
            newNode.value = Nodedata;
            newNode.next = nextOfLead;
            lead.next = newNode;
        }

        this.size++;

    }

    traversing() {  // ---> Function to read all nodes
        let counter = 1;
        let currentNode = this.head;
        while (counter <= this.size) {
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

    deleteNode(index) {  // ---> Function to delete node
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
        this.size--;
    }
}

let list = new List(1);

list.appendNode(2);
list.appendNode(3);
list.appendNode(4);
list.appendNode(5);

// list.insertNode(100, 2)

// list.traversing();

// list.updateNode(300, 1000);

// list.deleteNode(4);


console.log(list);