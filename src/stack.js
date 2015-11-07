var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function(value) {
  if (this.count === 0) {
    return null;
  }
  var pop = this.storage[this.count-1];
  delete this.storage[this.count];
  this.count--;
  return pop;
};

Stack.prototype.size = function() {
  return this.count;
};