const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

const main = () => {
  let arr = [-2, 4, 6, -22, 0, 5, 3, 44, 11, 100, -3];
  let keyValue = 101;
  const findIndexValue = linearSearch(arr, keyValue);
  if (findIndexValue === -1) console.log(`${keyValue} not found!`);
  else console.log(`${keyValue} found at ${findIndexValue} index of array`);
};

main();
