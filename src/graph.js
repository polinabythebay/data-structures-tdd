var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

Graph.prototype.contains = function(node) {
  return _.has(this.nodes, node);
};

Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.nodes[fromNode][toNode] === true);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(callback) {
  for (var node in this.nodes) {
    callback(node);
  }
};


