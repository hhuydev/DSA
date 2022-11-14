const { Queue } = require("./queue");
const _queue = new Queue();

//Enqueue
_queue.enqueue(10);
_queue.enqueue(4);
_queue.enqueue(-3);
_queue.enqueue(25);
_queue.enqueue(-77);

// _queue.printQueue();
//Dequeue
_queue.dequeue();
_queue.dequeue();
_queue.dequeue();

_queue.printQueue();

//Check Queue Is Empty
console.log(_queue.isEmpty() ? true : false);

//Get Front element
console.log(_queue.front());
