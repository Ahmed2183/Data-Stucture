/* Queue(FIFO) Example */
//enqueue(push) and dequeue(pop) are operation of Queue
let queue = [];
let queueLength = queue.length;
let maxVal = 5;

function pushQ(value) {  /* Add element in array */
    if (queueLength >= maxVal) {
        console.log("Queue is full you not enter:", value)
    }
    else {
        queue[queueLength] = value;
        queueLength++;
    }
}

pushQ(50); pushQ(40); pushQ(30); pushQ(20); pushQ(10);

function popQ() {  /* Remove element from array */
    if (queueLength > 0) {
        for (i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        }
        queueLength--;
        queue.length = queueLength;
    }
    else {
        console.log("Queue is already empty");
    }
}

// popQ(); popQ(); popQ(); popQ(); popQ();

console.log(queue);