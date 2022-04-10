/**
 * @param {number[]} nums
 * @return {number[]} arr
 */
function insertionSorting(nums) {
    let preIndex, current;
    for (let i = 1; i < nums.length; i++) {
        preIndex = i - 1;
        current = nums[i];
        while (current < nums[preIndex] && preIndex >= 0) {
            nums[preIndex + 1] = nums[preIndex];
            preIndex++
        }
        nums[preIndex + 1] = current;
    }
    return nums;
}
