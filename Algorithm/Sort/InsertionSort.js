let arr = [29, 3, -1, 0, 33, 122, -44, 3.5, 2];

const insertionSort = (array, n) => {
  let key, j;
  for (let i = 1; i < array.length; i++) {
    key = array[i];
    j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
};

(() => {
  console.log("Before array is not sorted: ", arr);
  console.log("After array is sorted: ", insertionSort(arr, arr.length));
})();
