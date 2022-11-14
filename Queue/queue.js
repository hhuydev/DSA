class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.queue.length === 0) return "Underflow";
    return this.queue.shift();
  }
  front() {
    if (this.queue.length === 0) return "Queue is empty";
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  printQueue() {
    for (let i = 0; i < this.queue.length; i++) {
      console.log(`${i}: ` + this.queue[i]);
    }
  }
}

module.exports = { Queue };
