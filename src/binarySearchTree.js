var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newTree = new BinarySearchTree(value);

  (function insertTree(bTree) {
    if (bTree.value < value) {
      if (bTree.right === null) {
        bTree.right = newTree;
      } else {
        insertTree(bTree.right)
      }
    } else {
      if (bTree.left ===  null) {
        bTree.left = newTree;
      } else {
        insertTree(bTree.left);
      }
    }
  })(this);
};

BinarySearchTree.prototype.contains = function(target) {

  return (function searchTree(bTree) {
    if (bTree.value === target) {
      return true;
    } 
    if (bTree.value < target) {
      if (bTree.right === null) {
        return false;
      } else {
        return searchTree(bTree.right);
      }
    } 
    if (bTree.value > target) {
      if (bTree.left === null) {
        present = false;
      } else {
        searchTree(bTree.left);
      }
    }
  })(this);
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

  (function traverseTree(bTree) {
    callback(bTree.value);
    if (bTree.left != null) {
      traverseTree(bTree.left);
    }
    if (bTree.right != null) {
      traverseTree(bTree.right);
    }
  })(this);
};

