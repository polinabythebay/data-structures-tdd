var DoubleLinkedList = function() {
  this.head = null;
  this.tail = null;
}

DoubleLinkedList.prototype.addToTail = function(value) {

}

DoubleLinkedList.prototype.addToHead = function(value) {

}

DoubleLinkedList.prototype.removeHead = function() {

}

DoubleLinkedList.prototype.removeTail = function() {

}

DoubleLinkedList.prototype.contains = function(target) {

}


var doubleNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
}