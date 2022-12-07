let arr = [29, 3, -1, 0, 33, 122, -44, 3.5, 2];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

(() => {
  console.log("Before array is not sorted: ", arr);
  console.log("After array is sorted: ", bubbleSort(arr));
})();
