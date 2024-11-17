// sliding window
const maxSumSubarray = (arr, size) => {
  let sum = 0;
  for (let index = 0; index < size; index++) {
    sum += arr[index];
  }
  let windowSum = sum;
  for (let index = size; index < arr.length; index++) {
    windowSum += arr[index] - arr[index - size];
    sum = Math.max(sum, windowSum)
  }
  return sum
};

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));
