
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var hasNotBeenInserted = true;
  var count = 0;
  var storage = this._storage;
  
  while (count < this._limit && hasNotBeenInserted) {
    if (!storage[index]) { 
    //slot is empty, insert
      storage[index] = {};
      storage[index][k] = v;
      hasNotBeenInserted = false;
      
    } else {
      if (!storage[index][k]) {
      //if slot has a property but that is not k >> [COLLISON]
        index = (index + 1) % this._limit;
        count++;
      } else {
      //if slot has k, overwrite
        storage[index][k] = v;
        hasNotBeenInserted = false;
      }  
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var count = 0;
  var storage = this._storage;
  
  while (count < this._limit) {
    if (!storage[index] || !storage[index][k]) {
      //loop through storage if slot is empty or if collision
      index = (index + 1) % this._limit;
    } else {
      return storage[index][k];
    }
    count++;
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage;
  while (!storage[index][k]) {
    index = (index + 1) % this._limit;
  }
  storage[index] = undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */