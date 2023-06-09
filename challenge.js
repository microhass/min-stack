class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.minValues = [];
  }

  push(number) {
    // your code here
    const newNode = new Node(number);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    if (
      !this.minValues.length ||
      number <= this.minValues[this.minValues.length - 1]
    ) {
      this.minValues.push(number);
    }

    return ++this.size;
  }

  pop() {
    // your code here
    if (!this.first) return null;
    const firstVal = this.first.value;
    if (this.size === 1) this.last = null;
    this.first = this.first.next;
    this.size--;

    if (firstVal === this.minValues[this.minValues.length - 1]) {
      this.minValues.pop();
    }
    return firstVal;
  }

  min() {
    if (!this.minValues.length) {
      return null;
    }
    
    return this.minValues[this.minValues.length - 1];
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
console.log(stack.min());
// => 3

stack.pop();
stack.push(7);
console.log(stack.min());
// => 3

stack.push(2);
console.log(stack.min());
// => 2

stack.pop();
console.log(stack.min());
// => 3

module.exports = Stack;
