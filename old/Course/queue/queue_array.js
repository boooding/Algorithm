class Queue {
    constructor() {
        this.queue = [];
        this.count = 0;
    }
    // enqueue
    enQueue (item) {
        this.queue[this.count++] = item;
    }
    // dequeue
    deQueue () {
        if (this.count) {
            this.queue.splice(0,1);
            this.count--;
        }
    }
}

const q = new Queue();
q.deQueue();
q.enQueue(1)
q.enQueue(2);
q.deQueue();
console.log(q)