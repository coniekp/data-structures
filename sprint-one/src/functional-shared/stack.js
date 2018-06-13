var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  extend (storage, stackMethods);
  return storage;
};

var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var stackMethods = {
  size: function() {
    return Object.keys(this).length - Object.keys(stackMethods).length;
  },
  push: function(value) {
    this[this.size()] = value;
  },
  pop: function() {
    var result = this[this.size() - 1];
    delete this[this.size() - 1];
    return result;
  }
};


