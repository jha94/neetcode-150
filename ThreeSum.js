// 2 pointer
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > 0) break;
    if (index && nums[index] === nums[index - 1]) continue;
    let left = index + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[index] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([nums[index], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  }
  return res;
};

console.log(threeSum([0, 0, 0]));
