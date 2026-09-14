/**
 * @param {number} k
 */
var MyCircularQueue = function (k) { //constructor
    this.queue = []
    this.start = -1
    this.end = -1
    this.currSize = 0
    this.size = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.currSize === 0) {
        this.start = 0
        this.end = 0
    }
    if (this.currSize === this.size) {
        return false
    }
    this.queue[this.end] = value
    this.end = (this.end + 1) % this.size
    this.currSize++
    return true //operation is successful
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.currSize === 0) return false
    if (this.currSize === 1) { //destroy the queue
        this.start = -1
        this.end = -1
    }else{
    this.start = (this.start + 1) % this.size
    }
    this.currSize--
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.currSize > 0)
        return this.queue[this.start]
    return -1
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.currSize > 0)
        return this.queue[(this.end - 1 + this.size) % this.size]
    return -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    if (this.currSize === 0) return true
    return false
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    if (this.currSize === this.size) return true
    return false
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */