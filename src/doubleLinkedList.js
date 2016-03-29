/**
 *
 * Problem: Doubly Linked List
 *
 * Prompt: Create a Doubly Linked List class/constructor
 * Name it DoublyLinkedList (java/js) or Doubly_Linked_List(rb/py)
 *
 * Part 1: Create a Node class for your Doubly Linked List
 *         Your node class will take an integer value and 
 *         output an object with the following properties: 
 *
 *         node.value: input value
 *         node.next: a pointer to the next node (initially null/nil)
 *         node.previous: a pointer to the previous node (initially null/nil)
 *
 *         Example: {value: 1, next: null, previous: null}
 *
 * Part 2: Create the Doubly Linked List class. 
 *         It should contain the following properties: 
 *
 *         head: pointer to the head node
 *         tail: pointer to the tail node
 *         length: number of nodes in the Doubly Linked List
 *
 *         The Doubly Linked List should also contain the 
 *         following properties: 
 *
 *         addToTail: function that adds a node behind the tail
 *
 *         addToHead: function that adds a node prior to the head
 *
 *         removeFromTail: function that removes the tail node and returns it
 *
 *         removeFromHead: function that removes the head node and returns it
 * 
 */

var Node = function(value){
  this.value = value;
  this.next = null;
  this.previous = null;
}

var DoublyLinkedList = function(){

  this.head = null;
  this.tail = null;
  this.length = 0; 
}

//adds a new node behind the tail
//takes in a value
DoublyLinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  this.length++;
  
  //cases:
  //no nodes, 1 node, 2+ nodes
  //if no node
  if (this.head === null && this.tail === null) {
    this.head = node;
    this.tail = node;
    //node doesn't have a previous or next, so those still point at null
    return;
  }
  
  if (this.length === 1) {
    this.tail = node;
    this.head.next = node;
    this.head.previous = node;
    this.tail.previous = this.head;
    this.tail.next = this.head;
    return;
  }
  
  //else, need to update this.head.previous and this.tail.next
  this.tail.next = node;
  var previousTail = this.tail;
  this.tail = node;
  this.tail.previous = previousTail;
  this.tail.next = this.head;
  this.head.previous = this.tail;
}

//adds a new node in front of the head
//takes in a value
DoublyLinkedList.prototype.addToHead = function(value) {
  var node = new Node(value);
  this.length++;
  //cases:
  //no nodes, 1 node, 2+ nodes
  //if no node
  if (this.head === null && this.tail === null) {
    this.head = node;
    this.tail = node;
    //node doesn't have a previous or next, so those still point at null
    return;
  }

  if (this.length === 1) {
    this.head = node;
    this.tail.next = node;
    this.tail.previous = node;
    this.head.previous = this.tail;
    this.head.next = this.tail;
    return;
  }
  
  //else, need to update this.tail.next and this.head.previous
  this.head.previous = node;
  var previousHead = this.head;
  this.head = node;
  this.head.next = previousHead;
  this.head.previous = this.tail;
  this.tail.next = this.head;
  
}

//remove node at tail
//updates tail
//returns node
DoublyLinkedList.prototype.removeFromTail = function() {
  var node = null;
 //cases: empty list, 1 item, 2 items, 2+ items
 if (this.length === 0) {
  return node;
 }
 if (this.length === 1) {
  node = this.tail;
  this.head = null;
  this.tail = null;
  this.length--;
  return node;
 }
 if (this.length === 2) {
  node = this.tail;
  node.next = null;
  node.previous = null;
  this.head.next = null;
  this.head.previous = null;
  this.tail = this.head;
  this.length--;
  return node;
 }
 
 node = this.tail;
 this.tail = node.previous;
 this.tail.next = this.head;
 this.head.previous = this.tail;
 node.previous = null;
 node.next = null;
 this.length--;
 return node;

}

//remove node at head
//updates tail
//returns node
DoublyLinkedList.prototype.removeFromHead = function() {
  var node = null;
   //cases: empty list, 1 item, 2 items, 2+ items
  if (this.length === 0) {
    return node;
  }
  
  if (this.length === 1) {
    node = this.head;
    this.head = null;
    this.tail = null;
    this.length--;
    return node;
  }
  
  if (this.length === 2) {
    node = this.head;
    node.next = null;
    node.previous = null;
    this.tail.next = null;
    this.tail.previous = null;
    this.head = this.tail;
    this.length--;
    return node;  
  }
  
  node = this.head;
  this.head = node.next;
  this.head.previous = this.tail;
  this.tail.next = this.head;
  node.previous = null;
  node.next = null;
  this.length--;
  return node;

}
//testing

// var db = new DoublyLinkedList();

//adding to tail
// db.addToTail(1);
// db.addToTail(2);
// db.addToTail(3);
// console.log(db);

//adding to head
// db.addToHead(1);
// db.addToHead(2);
// db.addToHead(3);
// console.log(db);

//removing from tail
// var db = new DoublyLinkedList();
// db.addToHead(1);
// db.addToHead(2);
// db.addToHead(3);
// console.log(db.removeFromTail());
// console.log(db.removeFromTail());
// console.log(db.removeFromTail());
// console.log(db.removeFromTail());
// console.log(db);

//removing from head
 // var db = new DoublyLinkedList();
 // db.addToHead(1);
 // db.addToHead(2);
 //  db.addToHead(3);
 //  db.addToHead(4);
 // console.log(db.removeFromHead());
 // console.log(db);


