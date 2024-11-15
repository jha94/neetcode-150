// Topic :- Array, string, hashing
// time complexity :- m*n

const groupAnagram = (strs) => {
  const results = {};
  strs.forEach((str) => {
    const arr = new Array(26).fill(0);
    for (let char of str) {
      arr[char.charCodeAt() - "a".charCodeAt()] += 1;
    }
    if (results[arr]) {
      results[arr].push(str);
    } else {
      results[arr] = [str];
    }
  });
  return Object.values(results);
};

console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));
