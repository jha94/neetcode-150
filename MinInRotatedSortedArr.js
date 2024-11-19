const findMin = (arr) => {
  let min = Infinity;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left];
};

console.log(findMin([4,5,0,1,2,3]));