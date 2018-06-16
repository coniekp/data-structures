var BinarySearchTree = function(value) {
  
  var BST = Object.create(BinarySearchTree.methods);
  BST.value = value;
  BST.left = null;
  BST.right = null;
  
  return BST;
  
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {
  if (this.value > value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

BinarySearchTree.methods.contains = function(value) {
  
  if (this.value === value) {
    return true;
  } else {
    var direction = this.value > value ? 'left' : 'right';
    if (this[direction]) {
      return this[direction].contains(value);
    } else {
      return false;
    }
  }
  
};

BinarySearchTree.methods.depthFirstLog = function(cb) {
  cb(this.value);
  
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
