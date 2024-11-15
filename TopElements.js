// Topic :- Array, string, hashing
// time complexity :- 2m*nlogn

const topKElements = (arr, k) => {
  const map = new Map();
  arr.forEach((value) => {
    if (map.has(value)) {
      map.set(value, map.get(value) + 1);
    } else {
      map.set(value, 1);
    }
  });
  const sortedArr = [...map.entries()].sort((a, b) => a[1] - b[1]).reverse();
  const result = [];
  for (let index = 0; index < k; index++) {
    result.push(sortedArr[index][0]);
  }
  return result;
};

console.log(topKElements([1, 2, 2, 3, 3, 3], 2));
