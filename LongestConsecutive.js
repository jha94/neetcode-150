// Topic :- Array, string, hashing
const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let longest = 0;
  for (let n of set) {
    if (!set.has(n - 1)) {
      let length = 1;
      while (set.has(n + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
