// 2 pointer
const maxArea = (heights) => {
  let start = 0;
  let end = heights.length - 1;
  let area = 0;
  for (let index = 0; index < heights.length; index++) {
    area = Math.max(
      area,
      Math.min(heights[start], heights[end]) * (end - start)
    );
    heights[start] > heights[end] ? end-- : start++;
  }
  return area;
};

console.log(maxArea([2, 2, 2]));
