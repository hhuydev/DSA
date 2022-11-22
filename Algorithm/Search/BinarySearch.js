let arr = [29, 3, -1, 0, 33, 122, -44, 3.5, 2];
let value = 122;

let sortedArray = arr.sort((a, b) => a - b);

//Recursion Approach
let recursiveFunction = (sortedArray, val, start, end) => {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (sortedArray[mid] === val) return true;
  if (sortedArray[mid] > val)
    return recursiveFunction(sortedArray, val, start, mid - 1);
  else return recursiveFunction(sortedArray, val, mid + 1, end);
};

if (recursiveFunction(sortedArray, value, 0, sortedArray.length))
  console.log("Value found");
else console.log("Value not found!");

//Interation Approach
let interationFunction = (sortedArray, val) => {
  let start = 0,
    end = sortedArray.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sortedArray[mid] === val) return true;
    else if (sortedArray[mid] > val) end = mid - 1;
    else start = mid + 1;
  }
  return false;
};

if (interationFunction(sortedArray, value)) console.log("Value found");
else console.log("Value not found!");
