var LimitedArray = function(limit){
  this.storage = [];
  this.limit = limit;
};

var checkLimit = function(index, limit){
  if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
  if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
};

LimitedArray.prototype.get = function(index){
  checkLimit(index, this.limit);
  return this.storage[index];
};

LimitedArray.prototype.set = function(index, value){
  checkLimit(index, this.limit);
  this.storage[index] = value;
};

LimitedArray.prototype.each = function(callback){
  for(var i = 0; i < this.storage.length; i++){
    callback(this.storage[i], i, this.storage);
  }
};

//hashing function
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};





