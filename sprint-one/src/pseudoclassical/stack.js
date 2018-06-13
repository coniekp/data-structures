var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this;
};

Stack.prototype.size = function () {
  return Object.keys(this).length;
};

Stack.prototype.push = function (value) {
  this[this.size()] = value;
};

Stack.prototype.pop = function () {
  var poppedItem = this[this.size() - 1];
  delete this[this.size() - 1];
  return poppedItem;
};


