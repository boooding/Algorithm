// int[] nums = new int[] {1,2,3,3,3};
// Solution solution = new Solution(nums);
//
// // pick(3) 应该返回索引 2,3 或者 4。每个索引的返回概率应该相等。
// solution.pick(3);
//
// // pick(1) 应该返回 0。因为只有nums[0]等于1。
// solution.pick(1);

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.pos = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(!this.pos.has(nums[i])) {
            this.pos.set(nums[i], [])
        }
        this.pos.get(nums[i]).push(i)
    }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const indexArr = this.pos.get(target);
    return indexArr[Math.floor(Math.random() * indexArr.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

// 水塘抽样
