var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value){
  var tree = new Tree(value);
  this.children.push(tree);
};

Tree.prototype.contains = function(target){

  var result = false;

  (function findTarget(treeNode) {
    if (treeNode.value === target) {
      result = true;
    }
    for (var i = 0; i < treeNode.children.length; i++) {
      findTarget(treeNode.children[i]);
    }
  })(this);

  return result;
};