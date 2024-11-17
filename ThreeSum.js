// 2 pointer
const threeSum = (nums) => {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > 0) break;
    if (index && nums[index] === nums[index - 1]) continue;
    let left = index + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[index] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[index], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          continue;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
