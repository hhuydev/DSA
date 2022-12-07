let arr = [29, 3, -1, 0, 33, 122, -44, 3.5, 2];

const selectionSort = (array, n) => {
  let minIndex = 0;
  for (let i = 0; i < n - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  return array;
};

(() => {
  console.log("Before array is not sorted: ", arr);
  console.log("After array is sorted: ", selectionSort(arr, arr.length));
})();
