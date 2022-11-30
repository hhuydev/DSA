let arr = [29, 3, -1, 0, 33, 122, -44, 3.5, 2];
let sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);

let start = 0,
  end = arr.length - 1;

const interpolationSearch = (ele, start, end, sortedArr) => {
  let pos = 0;
  if (start <= end && ele >= sortedArr[start] && ele <= sortedArr[end]) {
    pos =
      start +
      Math.floor(
        ((end - start) / (sortedArr[end] - sortedArr[start])) *
          (ele - sortedArr[start])
      );
    if (sortedArr[pos] === ele) return pos;
    if (sortedArr[pos] > ele)
      return interpolationSearch(ele, start, pos - 1, sortedArr);
    if (sortedArr[pos] < ele)
      return interpolationSearch(ele, pos + 1, end, sortedArr);
  }
  return -1;
};

(() => {
  let index = interpolationSearch(122, start, end, sortedArr);
  if (index === -1) console.log("Value not found");
  else console.log("Value found at index: ", index);
})();
