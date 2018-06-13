class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this;
  }

  size() {
    return Object.keys(this).length;
  }

  push(value) {
    this[this.size()] = value;
  }

  pop() {
    var poppedItem = this[this.size() - 1];
    delete this[this.size() - 1];
    return poppedItem;
  }

}