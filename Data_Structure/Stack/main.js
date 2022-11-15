const { Stack } = require("./stack");
const _stack = new Stack();

//Push
_stack.push(10);
_stack.push(2);
_stack.push(-3);
_stack.push(-6);
_stack.push(23);

//Print out Stack
// _stack.printStack();

//Pop
_stack.pop();
_stack.pop();

//Print out Stack
_stack.printStack();

//Check Stack Empty
console.log(_stack.isEmpty() ? "true" : "false");

//Peek
console.log(_stack.peek());
