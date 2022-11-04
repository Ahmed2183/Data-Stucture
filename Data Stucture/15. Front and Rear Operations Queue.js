/* Front and Rear operations Queue */
// Front means first element of Queue and Rear means last element of Queue

let frontrear = [50,40,30,20,10];
let frontrearLength = frontrear.length;

function front() {
    if (frontrearLength > 0) {
        console.log("Front Output", frontrear[0]);
    }
    else {
        console.log("Queue is empty");
    }
}

function rear() {
    if (frontrearLength > 0) {
        console.log("Rear Output:", frontrear[frontrearLength - 1]);
    }
    else {
        console.log("Queue is empty");
    }
}

front();
rear();
console.log(frontrear);