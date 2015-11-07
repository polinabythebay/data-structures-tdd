var HashTable = function(){
  this._limit = 8; //default size of hash table
  this._storage = new LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket === undefined) {
    bucket = {};
    bucket[k] = v;
    this._storage.set(i, bucket);
  }

  bucket[k] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i)[k] = null;
};