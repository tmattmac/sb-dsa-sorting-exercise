function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
          arr.splice(j, 0, arr[i]);
          arr.splice(i + 1, 1);
          break;
        }
      }
    }
  }
  return arr;
}

module.exports = insertionSort;