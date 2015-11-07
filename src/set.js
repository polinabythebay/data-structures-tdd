var Set = function() {
  this.storage = {};
};

Set.prototype.add = function(item) {
  if (this.storage[item] === undefined) {
    this.storage[item] = true;
  }
};

Set.prototype.contains = function(item) {
  return !!(this.storage[item]);
};

Set.prototype.remove = function(item) {
  delete this.storage[item];
};

