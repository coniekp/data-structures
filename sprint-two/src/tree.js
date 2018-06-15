var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
 
  var searchChildren = function(tree) {
    /* check whether the curtree has the target if does return true,
     else call searchChildren on its children */
    if (tree.value === target) { return true; } else {
      
      var hasTarget = false;
      
      for (var i = 0; i < tree.children.length; i++) {
        hasTarget = hasTarget || searchChildren(tree.children[i]);
      }
      
      return hasTarget;
    }   
  };
 
  return searchChildren(this);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
