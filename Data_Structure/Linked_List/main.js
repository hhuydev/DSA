const { LinkedList } = require("./linked-list");

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
