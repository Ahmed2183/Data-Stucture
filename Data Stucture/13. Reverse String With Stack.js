/* Class Example: Reverse String with Stack */
class Stack {
    item = [];
    currentSize;
    maxSize;
    constructor(size) {
        this.maxSize = size;
        this.currentSize = this.item.length;
    }
    push(value) {
        if (this.currentSize >= this.maxSize) {
            console.log("Stack is full you not enter:", value)
        }
        else {
            this.item[this.currentSize] = value;
            this.currentSize++;
        }
    }

    pop() {
        if (this.currentSize > 0) {
            let lastRemovedItem = this.item[this.currentSize - 1];
            this.currentSize--;
            this.item.length = this.currentSize;
            return lastRemovedItem;
        }
        else {
            console.log("Stack is already empty");
        }
    }

    reverseString(element) {
        for (let i = 0; i < element.length; i++) {
            this.push(element[i]);
        }

        for (let i = 0; i < element.length; i++) {
            element[i] = this.pop();
        }
    }

    display() {
        console.log(this.item);
    }
}

let obj = new Stack(5);

let str1 = 'Ahmed';
str1 = str1.split("");


obj.reverseString(str1);
console.log("String After Reverse", str1.join(""));  /* --> Convert array into string */
console.log("String After Reverse in Array", str1);

obj.push(10); obj.push(20); obj.push(30); obj.push(40); obj.push(50);
// obj.pop();

obj.display();
