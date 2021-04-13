var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let s = i + 1; s < nums.length; s++) {
      if (nums[i] + nums[s] === target) {
        return [i, s];
      }
    }
  }
};
