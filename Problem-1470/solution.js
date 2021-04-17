var shuffle = function (nums, n) {
  const yArray = [];
  for (let start = 0, end = n; end < nums.length; start++, end++) {
    yArray.push(nums[start]);
    yArray.push(nums[end]);
  }
  return yArray;
};
