function bubbleSort(arr) {
  let end = arr.length;
  let lastRunSorted;
  do {
    lastRunSorted = false;
    for (let i = 0; i < end - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        ([arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]);
        lastRunSorted = true;
      }
    }
    end--;
  } while (lastRunSorted)
  return arr;
}

module.exports = bubbleSort;