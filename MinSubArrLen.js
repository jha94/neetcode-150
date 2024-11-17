const minSubArrayLen = (arr, sum) => {
  let minLength = Infinity;
  let start = 0;
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    total += arr[index];
    while (total >= sum) {
      minLength = Math.min(minLength, index - start + 1);
      total -= arr[start];
      start += 1;
    }
  }
  return minLength;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
