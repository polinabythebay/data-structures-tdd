var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    if (list.head == null) {
      return null;
    }
    var remove = list.head;
    list.head = list.head.next;
    return remove.value;
  };

  list.contains = function(target){
    if (list.head == null) {
      return false;
    }

    return (function searchNodes(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return searchNodes(node.next);
      }
    })(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

