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
  removeElement(element) {
    let currentNode = this.head;
    let prev = null;
    while (currentNode !== null) {
      if (currentNode.element === element) {
        if (prev === null) this.head = currentNode.next;
        else prev.next = currentNode.next;

        this.size--;
        return currentNode.element;
      }
      prev = currentNode;
      currentNode = currentNode.next;
    }
    return -1;
  }
  removeElementWithIndex(index) {
    if (index < 0 || index > this.size) return console.log("Invalid index");
    let currentNode = this.head;
    let prev = currentNode;
    let interateIndex = 0;
    if (index === 0) this.head = currentNode.next;
    else {
      while (interateIndex < index) {
        interateIndex++;
        prev = currentNode;
        currentNode = currentNode.next;
      }
      prev.next = currentNode.next;
    }
    this.size--;
    return currentNode.element;
  }
  insertElementWithIndex(element, index) {
    if (index < 0 || index > this.size) return console.log("Invalid index");
    let node = new Node(element);
    let currentNode = this.head;
    let prev;
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      currentNode = this.head;
      let interateIndex = 0;
      while (interateIndex < index) {
        interateIndex++;
        prev = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      prev.next = node;
    }
    this.size++;
  }
}

module.exports = { LinkedList };
