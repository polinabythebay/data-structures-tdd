var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.front = 0;
  this.back = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.front+this.count] = value;
  this.back++;
  this.count++;
}

Queue.prototype.dequeue = function() {
  if (this.count === 0) {
    return null;
  }
  var result = this.storage[this.front];
  this.front++;
  this.count--;
  return result;
}

Queue.prototype.size = function() {
  return this.count;
}