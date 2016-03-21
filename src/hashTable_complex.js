 /**********************************************************************************
  *                                 Homework VII                                   *
  *                                                                                *
  *  Problem: Hash Table                                                           *
  *                                                                                *
  *  Prompt: Create a HashTable class/constructor.                                 *
  *          Name it HashTable (js) or hash_table (rb/py). Use separate chaining.  *
  *                                                                                *
  *          The HashTable will have the following properties:                     *
  *                                                                                *
  *          storage: An array of arrays.                                          *
  *                                                                                *
  *          buckets: The max number of buckets that your storage can contain.     *
  *                   Initialize your "buckets" at 8 buckets.                      *
  *                                                                                *
  *          size: The current number (total) of key-value pairs in the storage.   *
  *                Initialize your "size" to 0.                                    *
  *                                                                                *
  *          The HashTable will also have the following methods:                   *
  *                                                                                *
  *          hash: Method that takes a string as an input and outputs a number.    *
  *                We have provided to you the dbjb2 hashing function, so you do   *
  *                not need to write your own.                                     *
  *                                                                                *
  *          insert: Method that takes a key and a value as inputs, and places a   *
  *                  tuple ([key,value]) into the proper bucket.                   *
  *                  If the key already exists, it should update the value.        *
  *                  You should use separate chaining to handle collisions.        *
  *                                                                                *
  *          delete: Method that takes a key as its input, and looks for the       *
  *                  [key,value] and removes it from the bucket.                   *
  *                                                                                *
  *          retrieve: Method that a key as its input, and returns the value       *
  *                    stored at that key, or undefined if the key is not present. *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A HashTable instance                                                  *
  *                                                                                *
  *  What are the time and auxiliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/

var hashTable = function() {
    this.storage = [];
    this.buckets = 8;
    this.size = 0;
}

hashTable.prototype.hash = function(str) {
    //use dbjb2 hashing function
     var hash = 5381;
     for (i = 0; i < str.length; i++) {
       char = str.charCodeAt(i);
       hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
     }
     return hash % this.buckets; 
}

hashTable.prototype.insert = function(key, value) {
    //hash key to index
    var index = this.hash(key);
    //check if index exists in storage
    if (this.storage[index] === undefined) {
        //create array at index and push key value
        //pair there
        this.storage[index] = [];
        this.storage[index].push([key, value]);
        this.size++;
    } else {
        //iterate through array at that index
        //and see if key already exists
        for (var i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i][0] === key) {
                this.storage[index][i][1] === value;
                return;
            }
            
        }
        this.storage[index].push([key, value]);
        this.size++;
    }
}

hashTable.prototype.delete = function(key) {
  //hash key to index
    var index = this.hash(key);
    if (this.storage[index] === undefined) {
        return;
    } else {
       for (var i = 0; i < this.storage[index].length; i++) {
           if (this.storage[index][i][0] === key) {
            //remove this key value pair and decrement size
           this.storage[index][i].splice(i, 1);
           //doing this below passes the tests, but I don't 
           //think I want to do it this way
            // this.storage[index][i][0] = undefined;
            // this.storage[index][i][1] = undefined;
            this.size--;
           }
       } 
    }
}

hashTable.prototype.retrieve = function(key) {
    //hash key to index
    var index = this.hash(key);
     if (this.storage[index] === undefined) {
         return null;
     } else {
         for (var i = 0; i < this.storage[index].length; i++) {
             if (this.storage[index][i][0] === key) {
                 return this.storage[index][i][1];
             }
         }
         return null;
     }   
}

