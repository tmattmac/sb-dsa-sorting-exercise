function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i; j < arr.length; j++) {
      minIdx = arr[j] < arr[minIdx] ? j : minIdx;
    }
    arr.splice(i, 0, arr[minIdx]);
    arr.splice(minIdx + 1, 1);
  }
  return arr;
}

module.exports = selectionSort;