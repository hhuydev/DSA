let arr = [29, 3, -1, 0, 33, 122, -44, 3.5, 2];

const merge = (array, left, mid, right) => {
  console.log("mid: ", mid);
  console.log("right: ", right);

  let n1 = mid - left + 1;
  let n2 = right - mid;

  //initial temp 2 temp arrays
  let leftArray = new Array(n1);
  let rightArray = new Array(n2);

  for (let i = 0; i < n1; i++) {
    leftArray[i] = array[left + i];
  }
  for (let j = 0; j < n2; j++) {
    rightArray[j] = array[mid + 1 + j];
  }

  //initial index of left array
  let i = 0;
  //initial index of right array
  let j = 0;
  //initial index of merge array
  let k = left;
  while (i < n1 && j < n2) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }
  //coppy the remaining elements
  while (i < n1) {
    array[k] = leftArray[i];
    i++;
    k++;
  }
  while (j < n2) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
};

const mergeSort = (array, left, right) => {
  if (left >= right) return;
  else {
    let mid = left + parseInt((right - left) / 2);
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
  }
  return array;
};

(() => {
  console.log("Before array is not sorted: ", arr);
  console.log("After array is sorted: ", mergeSort(arr, 0, arr.length - 1));
})();
