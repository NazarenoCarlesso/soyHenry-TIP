function subsetSum (nums, target, index = 0) {
  // Your code here:
  if (target === 0) return true
  if (target < 0) return false
  if (index > nums.length) return false
  const whenExcluded = subsetSum(nums, target, index + 1)
  const whenIncluded = subsetSum(nums, target - nums[index], index + 1)
  return whenExcluded || whenIncluded
}

module.exports = subsetSum
