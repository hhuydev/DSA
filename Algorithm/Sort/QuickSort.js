let arr = [29, 3, -1, 0, 33, 122, -44, 3.5, 2];

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const partition = (array, low, high) => {
  let pivot = array[high];

  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, high);
  return i + 1;
};

const quickSort = (array, low, high) => {
  if (low < high) {
    let pi = partition(array, low, high);
    quickSort(array, low, pi - 1);
    quickSort(array, pi + 1, high);
  }
  return array;
};

(() => {
  console.log("Before array is not sorted: ", arr);
  console.log("After array is sorted: ", quickSort(arr, 0, arr.length - 1));
})();
