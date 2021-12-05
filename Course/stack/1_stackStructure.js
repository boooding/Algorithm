class Stack {
    constructor() {
        this.data = [];
        this.count = 0;
    }
    // push
    push(item) {
        // this.data.push(item)
        // this.data[this.data.length] = item;
        this.data[this.count] = item;
        this.count++;
    }
    // pop
    pop() {
        if (this.count) {
            const popData = this.data[this.count - 1];
            delete this.data[--this.count];
            return popData;
        } else {
            console.log("Stack is empty")
        }
    }
    // top
    top() {
        if (this.count) {
            return this.data[this.count - 1];
        } else {
            console.log("Stack is empty")
        }
    }
    // size
    size() {
        return this.count;
    }
    // clear
    clear() {
        this.data = [];
        this.count = 0;
    }
}

// const sta = new Stack();
// sta.push(1);
// console.log(sta.pop());
// sta.pop()
// sta.top();
// sta.push(2);
// console.log(sta.top());
