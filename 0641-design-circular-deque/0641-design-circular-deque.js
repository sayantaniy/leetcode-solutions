/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.queue = [] //array
    this.size = k
    this.front = -1
    this.rear = -1
    this.currSize = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.currSize === 0) {
        this.front = 0
        this.rear = 0
        this.queue[this.front] = value
        this.rear = this.rear + 1
        this.currSize += 1
        return true
    }
    if (this.currSize === this.size) {
        return false
    }
    this.front = (this.front - 1 + this.size) % this.size
    this.queue[this.front] = value
    this.currSize += 1
    return true
}


/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.currSize === 0) {
        this.front = 0
        this.rear = 0
    }
    if (this.currSize === this.size) {
        return false
    }
    this.queue[this.rear] = value
    this.currSize += 1
    this.rear = (this.rear + 1) % this.size
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.currSize === 0) return false
    if (this.currSize === 1) {
        this.front = -1
        this.rear = -1
    } else {
        this.front = (this.front + 1) % this.size
    }
    this.currSize--
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.currSize === 0) return false
    if (this.currSize === 1) {
        this.front = -1
        this.rear = -1
    } else {
        this.rear = (this.rear - 1 + this.size) % this.size
    }
    this.currSize--
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.currSize > 0) {
        return this.queue[this.front]
    }
    return -1

};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.currSize > 0) {
        return this.queue[(this.rear - 1 + this.size) % this.size]
    }
    return -1

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return (this.currSize === 0)

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return (this.currSize === this.size)

};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */