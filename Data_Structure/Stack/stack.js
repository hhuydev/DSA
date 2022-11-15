class Stack {
  constructor() {
    this.stack = [];
  }
  pop() {
    if (this.stack.length === 0) return "Underflow";
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  push(element) {
    return this.stack.push(element);
  }
  printStack() {
    for (let i = 0; i < this.stack.length; i++) {
      console.log(`${i}: ` + this.stack[i]);
    }
  }
}

module.exports = { Stack };
