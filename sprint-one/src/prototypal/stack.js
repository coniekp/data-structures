var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  return storage;
};

var stackMethods = {
  size: function () {
    return Object.keys(this).length;
  },
  push: function (value) {
    this[this.size()] = value;
  },
  pop: function (value) {
    var index = this.size() - 1;
    var result = this[index];
    delete this[index];
    return result;
  }
};


