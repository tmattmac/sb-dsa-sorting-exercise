/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length) {
  let idx = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < arr[idx]) {
      arr.splice(start, 0, arr[i]);
      arr.splice(i + 1, 1);
      idx++;
    }
  }
  return idx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, start = 0, end = arr.length) {
  if (end - start <= 1) return arr;
  const p = pivot(arr, start, end);
  quickSort(arr, start, p);
  quickSort(arr, p + 1, end);
  return arr;
}

module.exports = { pivot, quickSort };