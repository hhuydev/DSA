class QueueElement {
  constructor(value) {
    this.value = value;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    let _element = new QueueElement(element);
    let contain = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i] > _element.value) {
        this.queue.splice(i, 0, _element.value);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.queue.push(_element.value);
    }
  }
  dequeue() {
    if (this.queue.length === 0) return "Underflow";
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.queue[0];
  }
  rear() {
    if (this.isEmpty()) return "Queue is empty";
    return this.queue[this.queue.length - 1];
  }
  printQueue() {
    for (let i = 0; i < this.queue.length; i++) {
      console.log(`${i}: ` + this.queue[i]);
    }
  }
}
module.exports = { PriorityQueue };
