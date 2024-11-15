const productExceptSelf = (nums) => {
  const result = [];
  let prefix = 1;
  let postfix = 1;
  for (let index = 0; index < nums.length; index++) {
    result[index] = prefix;
    prefix *= nums[index];
  }
  // [1, 1, 2, 6]
  for (let index = nums.length - 2; index >= 0; index--) {
    postfix *= nums[index+1];
    result[index] *= postfix;
  }
  return result
};

console.log(productExceptSelf([1, 2, 3, 4]));
