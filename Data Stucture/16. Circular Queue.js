/* Circular Queue */
class Queue {
    constructor(size) {
        this.max = size;
        this.item = new Array(size);  /* -->Fixed Array Size */
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }
    enqueue(val) {
        if (this.currentSize != this.max) {
            if (this.rear == this.max - 1) {
                this.rear = 0;
            } else {
                this.rear++;  // --> Increment in -1 is 0
            }
            this.item[this.rear] = val;
            this.currentSize++;
            if ((this.front == -1)) {
                this.front = this.rear;
            }
        }
    }
    dequeue() {
        if (this.currentSize != 0) {
            this.item[this.front] = null;
            if (this.front == this.max - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
            this.currentSize--;
        } else {
            this.front = -1;
            this.rear = -1;
            console.log("Queue is empty");
        }
    }
}

let circular = new Queue(5);

circular.enqueue(5); circular.enqueue(10); circular.enqueue(15); circular.enqueue(20); circular.enqueue(25);
circular.dequeue();
console.log(circular);