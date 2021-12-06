let dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length);
    let stack = [];

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while ( stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop();
        }
        res[i] = stack.length ? stack[stack.length - 1] - i : 0;
        stack.push(i);
    }
    return res;
};