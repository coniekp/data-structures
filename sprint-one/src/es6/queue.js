class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this;
  }

  size() {
    return Object.keys(this).length;
  }

  enqueue(value) {
    this[this.size()] = value;
  }

  dequeue() {
    var result = this[0];
    delete this[0];

    for (var i = 1; i <= this.size(); i++) {
      this [i - 1] = this[i];
    }

    delete this[this.size() - 1];
    return result;
  }

}
