var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  extend (storage, queueMethods);
  return storage;
};

var extend = function (obj, obj2) {
  for (var key in obj2) {
    obj[key] = obj2[key];
  }
};
var queueMethods = {
  size: function() {
    return Object.keys(this).length - Object.keys(queueMethods).length;
  },
  enqueue: function(value) {
    this[this.size()] = value;
  },
  dequeue: function() {
    var result = this[0];
    delete this[0];

    for (var i = 1; i <= this.size(); i++) {
      this [i - 1] = this[i];
    }

    delete this[this.size() - 1];
    return result;
  }
};


