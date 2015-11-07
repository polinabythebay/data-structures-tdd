describe('doubly-linkedList', function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = new DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doubleLinkedList).to.have.property("head");
    expect(doubleLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "addToHead", "removeHead", "removeTail", and "contains"', function() {
    expect(doubleLinkedList.addToTail).to.be.a("function");
    expect(doubleLinkedList.removeHead).to.be.a("function");
    expect(doubleLinkedList.contains).to.be.a("function");
    expect(doubleLinkedList.addToHead).to.be.a("function");
    expect(doubleLinkedList.removeTail).to.be.a("function");
  });

  xit('should designate a new tail when new nodes are added', function(){
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.tail.value).to.equal(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.tail.value).to.equal(5);
  });

  xit('should designate a new head when new nodes are added to head', function(){
    // doubleLinkedList.addToTail(4);
    // expect(doubleLinkedList.tail.value).to.equal(4);
    // doubleLinkedList.addToTail(5);
    // expect(doubleLinkedList.tail.value).to.equal(5);
  });

  xit('should remove the head from the list when removeHead is called', function(){
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.head.value).to.equal(4);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(5);
  });

  xit('should remove the tail from the list when removeTail is called', function(){
    // doubleLinkedList.addToTail(4);
    // doubleLinkedList.addToTail(5);
    // expect(doubleLinkedList.head.value).to.equal(4);
    // doubleLinkedList.removeHead();
    // expect(doubleLinkedList.head.value).to.equal(5);
  });

  xit("should return the value of the former head when removeHead is called", function(){
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.removeHead()).to.equal(4);
  });

  xit("should contain a value that was added", function(){
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.contains(4)).to.equal(true);
    expect(doubleLinkedList.contains(5)).to.equal(true);
    expect(doubleLinkedList.contains(6)).to.equal(false);
  });

  xit('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });
});