 /********************************************************************************** 
  *   Create a Linked List class/constructor.                               *
  *          Name it LinkedList (js)                        *
  *                                                                                *
  *          Part 1: Create a node class for your LinkedList.                      *
  *                  Your node class will take an integer value and output         *
  *                  and output and object with the following properties:          *
  *                                                                                *
  *                  node.value: input value                                       *
  *                  node.next: a pointer to the next value (initiall null)        * 
  *                                                                                *
  *                  Example: { value: 1, next: null }                             *
  *                                                                                *
  *          Part 2: Create the LinkedList class.                                  *
  *                  It should contain the following properties:                   *
  *                                                                                *
  *                  head: pointer to the head node                                *
  *                  tail: pointer to the tail node                                *
  *                  length: number of nodes in the linked list                    *
  *                                                                                *
  *                  The LinkedList should also contain the following properties   *
  *                                                                                *
  *                  append: function that adds a node to the tail                 *
  *                                                                                *
  *                  insert: function that takes in two values, one to be inserted *
  *                          and one to search.  It searches the list for the      *
  *                          search value, and if found, adds a new node with the  *
  *                          insert value after the node with the search value.   *
  *                                                                                *
  *                  delete: function that removes a node at a specified location, *
  *                          with a default action of deleting the head            *
  *                                                                                *
  *                  contains: function that checks to see if a value is contained *
  *                            in the list                                         *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A LinkedList instance                                                 *
  *                                                                                *
  *  What are the time and auxilliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/

  // listNode
var listNode = function(value){
   this.value = value;
   this.next = null;
}

// linkedList
var linkedList = function(){
 this.head = null;
 this.tail = null;
 this.listLength = 0;
 

  //appending is constant
  //on the front or the back
  this.append = function(value) {
    var node = new listNode(value);
    //if completely empty
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.listLength++;
  }

  //returns true if value is in linkedlist
  //time complexity: linear (have to traverse entire ll)
  this.contains = function(target) {
    var found = false;

    function traverse(item) {
      if (item.value === target) {
        found = true;
        return;
      }
      
      if (item.next === null) {
        return;
      } else {
        traverse(item.next);
      }
    }

    traverse(this.head);
    return found;
  }

  //deletes node at index
  //if index out of bounds, does not do anything
  this.delete = function(index) {
      
    var depth = 0;
    var previous = null;
    var current = this.head;
    
    if (this.head === null) {
      return;
    }
      
    while(depth <= index) {
        
      if (depth === index) {
        //if it's the only thing in the linkedlist
        if (this.listLength === 1) {
          this.head = null;
          this.tail = null;
          this.listLength = 0;
          break;
        }
            
        //if last elt, update tail and set
        //previous to null
        else if (this.tail === current) {
          this.tail = previous;
          previous.next = null;
        }
        
        //if first elt, update head
        else if (this.head === current) {
          this.head = current.next;
        }
        
        //if middle elt
        else {
          //set previous.next to current.next
          var temp = current.next;
          previous.next = current.next;
        }
        
        this.listLength--;
        
        break;
      } 
        
      if (current.next === null) {
        break;
      }

      depth++;
      previous = current;
      current = current.next;

    }
      
  }

  //adds node with insertValue
  //after node with searchValue in the list
  this.insert = function(insertValue, searchValue) {
    var node = new listNode(insertValue);
    var linkedList = this;
    
    function traverse(item) {

      if (item.value === searchValue) {

        if (item.next === null) {
          item.next = node;
          linkedList.tail = node;

        } else {

          var temp = item.next;
          item.next = node;
          node.next = temp;
        }
            
        linkedList.listLength++;
        return;
      }
        
      if (item.next === null) {
        return;
      } else {
        traverse(item.next);
      }
    }

    traverse(this.head);
  }

}