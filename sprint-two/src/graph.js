

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  
  var Node = function(value) {
    this.value = value;
    this.connections = [];
  };
  var newNode = new Node(node);
  
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.some(function (nodeObj) {
    return nodeObj.value === node;
  });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    } else {
      var indexOfConnection = this.nodes[i].connections.indexOf(node);
      if (indexOfConnection >= 0) {
        this.nodes[i].connections.splice(indexOfConnection, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      return this.nodes[i].connections.includes(toNode);
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  var from, to;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromValue) {
      from = this.nodes[i];
    } 
    if (this.nodes[i].value === toValue) {
      to = this.nodes[i];
    }
  }
  
  from.connections.push(toValue);
  to.connections.push(fromValue);
 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var from, to, fromIndex, toIndex;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      from = this.nodes[i];
    } 
    if (this.nodes[i].value === toNode) {
      to = this.nodes[i];
    }
  }
  
  fromIndex = from.connections.indexOf(toNode);
  toIndex = to.connections.indexOf(fromNode);
  
  from.connections.splice(toIndex, 1);
  to.connections.splice(fromIndex, 1);
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb (this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


