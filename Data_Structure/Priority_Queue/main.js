const { PriorityQueue } = require("./queue");

const _queue = new PriorityQueue();

//Enqueue
_queue.enqueue(-10);
_queue.enqueue(5);
_queue.enqueue(-1);
_queue.enqueue(67);
_queue.enqueue(20);
_queue.enqueue(0);

// _queue.printQueue();
//Dequeue
_queue.dequeue();
_queue.dequeue();
_queue.dequeue();

_queue.printQueue();

//Get Front value
console.log("Front value: ", _queue.front());

//Get Rear value
console.log("Front value: ", _queue.rear());

//Check Queue Is Empty
console.log("Is queue empty: ", _queue.isEmpty());
