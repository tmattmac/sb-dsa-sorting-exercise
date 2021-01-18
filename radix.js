function getDigit(num, power) {
  return Math.floor((num % Math.pow(10, power + 1)) / Math.pow(10, power));
}

function digitCount(num) {
  return num.toString().length;
}

function mostDigits(nums) {
  return nums.reduce((acc, num) => {
    return Math.max(acc, digitCount(num));
  }, 0);
}

function radixSort(arr) {
  let result = [...arr];
  let buckets = new Array(10).fill(null).map(e => []);
  let maxDigits = mostDigits(arr);
  for (let power = 0; power <= maxDigits; power++) {
    for (const num of result) {
      const digit = getDigit(num, power);
      buckets[digit].push(num);
    }
    result = buckets.flat();
    buckets = buckets.map(e => []);
  }
  return result;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };