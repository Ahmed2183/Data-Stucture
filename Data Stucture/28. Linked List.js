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
        else if (pos > this.size) {

            this.appendNode(Nodedata);
            this.size--;
        }
        else {
            while (counter < pos - 1) {

                lead = lead.next;
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

    updateNode(index, value) {  // ---> Update Node
        let counter = 1;
        let curr = this.head;
        while (counter <= this.size && counter < index) {
            curr = curr.next
            counter++;
        }
        if (counter > this.size) return console.log(`Node Search out of bound`)

        curr.value = value;
        // console.log("Result Node by element is : ", curr);
    }

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

    searchNodeByValue(val) { // ---> Function to search node, By Value
        let curr = this.head;
        let counter = 1;
        while (counter <= this.size && curr.value != val) {
            curr = curr.next;
            counter++;
        }
        if (counter > this.size) return console.log(`Node with value ${val} is not present`)
        console.log("Result Node by value is :", curr);
    }

    searchNodeByElement(elm) { // ---> Function to search node, By Element
        let counter = 1;
        let curr = this.head;
        while (counter <= this.size && counter < elm) {
            curr = curr.next
            counter++;
        }
        if (counter > this.size) return console.log(`Node Search out of bound`)

        console.log("Result Node by element is : ", curr);

    }
}

let list = new List(100);

list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);

// list.insertNode(600, 6);
// list.insertNode(600, 7);

// list.updateNode(4, 1000);

// list.deleteNode(4);

// list.searchNodeByValue(300);

// list.searchNodeByElement(2);

list.traversing();

console.log(list);