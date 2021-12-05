let MinStack = function (){
    this.data = [];
    this.minData = [];
    this.count = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x);
    if (this.count) {
        this.minData[this.count] = Math.min(
            this.minData[this.count - 1], x
        )
    } else {
        this.minData[this.count] = x;
    }
    this.count++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.count) {
        this.data.pop();
        this.minData.pop();
        this.count--;
    } else return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.count - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.count? this.minData[this.count - 1]: null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
