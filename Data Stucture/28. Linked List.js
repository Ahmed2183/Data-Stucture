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
}

let list = new List(100);

list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);

console.log(list)