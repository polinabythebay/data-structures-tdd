/*********************************************************************************** 
  *                                 Homework V                                     *
  *                                                                                *
  *  Problem: Binary Search Tree                                                   *
  *                                                                                *
  *  Prompt: Create a BinarySearchTree class/constructor.                          *
  *          Name it binarySearchTree (js) or binary_search_tree (rb/py).          *
  *                                                                                *
  *          Part 1: Create a node class for your binarySearchTree.                *
  *                  Your node class will take an integer value and output         *
  *                  an object with the following properties:                      *
  *                                                                                *
  *                  node.value: input value                                       *
  *                  node.leftChild: a pointer to the left child Node              * 
  *                  node.rightChild: a pointer to the right child Node            *
  *                                                                                *
  *                  Example: { value: 1, leftChild: null, rightChild: null }      *
  *                                                                                *
  *          Part 2: Create the BinarySearchTree class.                            *
  *                  It should contain the following properties:                   *
  *                                                                                *
  *                  root: pointer to the root node                                *
  *                  size: number of nodes in the BinarySearchTree                 *
  *                                                                                *
  *                  The BinarySearchTree will also have the following properties: *
  *                                                                                *
  *                  insert: method that takes takes an input value, and creates a *
  *                          new node with the given input.  The method will then  *
  *                          find the correct place to add the new node. (Remember *
  *                          that nodes with values larger than the parent node go *
  *                          to the right, and smaller values go to the left.)     *
  *                                                                                *
  *                  search: method that will search to see if a node with a       *
  *                          specified value exists.  If present returns true,     *
  *                          else returns false.                                   *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A BinarySearchTree instance                                           *
  *                                                                                *
  *  What are the time and auxilliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/


 /**
  *  Extra Credit: Remove
  *
  *  Prompt: Create a remove method on your BinarySearchTree that will remove and
  *          return a given value from the tree and retie the tree so it remains
  *          properly sorted.
  **/


var node = function(value){
  this.value = value;
  this.rightChild = null;
  this.leftChild = null;
}


var binarySearchTree = function(){
  this.root = null;
  this.size = 0;
}

//logn
binarySearchTree.prototype.insert = function(value) {

    var toAdd = new node(value);

    if (this.size === 0) {
        this.root = toAdd;
    } else {
        insert(this.root);
    }
    this.size++;
    
    function insert(tree) {
        
        if (tree.value <= value) {
            if (tree.rightChild === null) {
                tree.rightChild = toAdd;
                return; //don't need this
            } else {
                insert(tree.rightChild);
            }
        } else {
            if (tree.leftChild === null) {
                tree.leftChild = toAdd;
                return;
            } else {
                insert(tree.leftChild);
            }
        }
    }
}

//logn
binarySearchTree.prototype.search = function(target) {
    var contains = false;
    
    function traverse(tree) {
        
        if (tree.value === target) {
            contains = true;
            return;
        } else {
            if (tree.value <= target) {
                if (tree.rightChild === null) {
                    return;
                }
                traverse(tree.rightChild);  
                
            } else {
                if (tree.leftChild === null) {
                    return;
                }
                traverse(tree.leftChild);
            }
        }
    }
    
    traverse(this.root);
    return contains;  
}


binarySearchTree.prototype.delete = function(target) {
    
    var toSave = [];
    
    function traverse(tree) {
        if (tree === null) {
            return;
        }
        if (tree.value !== target) {
            toSave.push(tree.value);
        }
        traverse(tree.rightChild);
        traverse(tree.leftChild);
    }  
    
    traverse(this.root);
    
    this.size = 0;
    var tempTree = new binarySearchTree();
    
    for (var i = 0; i < toSave.length; i++) {
        tempTree.insert(toSave[i]);
    }
    
    this.root = tempTree.root;
    this.size = tempTree.size;
    
}