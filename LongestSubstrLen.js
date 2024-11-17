// sliding window

const lengthOfLongestSubstring = (str) => {
  const charIndexMap = new Map();
  let start = 0;
  let maxLength = 0;
  for (let index = 0; index < str.length; index++) {
    if (charIndexMap.has(str[index]) && charIndexMap.get(str[index]) >= start) {
      start++;
    }
    charIndexMap.set(str[index], index);
    maxLength = Math.max(maxLength, index - start + 1);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
