class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    let node = new Node(element);
    let currentNode;
    if (this.head === null) this.head = node;
    else {
      currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++;
  }
  indexOf(element) {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.element === element) return count;
      count++;
      currentNode = currentNode.next;
    }
    return -1;
  }
  printList() {
    let currentNode = this.head;
    let str = "";
    while (currentNode) {
      str += currentNode.element + "  ";
      currentNode = currentNode.next;
    }
    console.log(str);
  }
  isEmpty() {
    return this.size === 0;
  }
  sizeOfLinkedList() {
    return this.size;
  }
}

module.exports = { LinkedList };
