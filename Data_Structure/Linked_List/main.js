const { LinkedList } = require("./LinkedList");

const _ll = new LinkedList();

//Add Node
_ll.add(-3);
_ll.add(10);
_ll.add(1);
_ll.add(12);
_ll.add(0);
_ll.add(-44);

//Print out linkedlist
_ll.printList();

//Get index of element
console.log("Index of 0: ", _ll.indexOf(0));

//Is linkedlist empty
console.log("Is linkedlist empty: ", _ll.isEmpty());

//Get size of linkedlist
console.log("Size of linkedlist: ", _ll.sizeOfLinkedList());

//Insert element with index
_ll.insertElementWithIndex(-22, 4);
_ll.printList();

//Remove element
_ll.removeElement(0);
_ll.printList();

//Remove element with index
_ll.removeElementWithIndex(4);
_ll.printList();
