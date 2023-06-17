/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const result = nums.some(element => {
    if (nums.indexOf(element) !== nums.lastIndexOf(element)) {
      return true;
    }

    return false;
  });
  return result;
};
