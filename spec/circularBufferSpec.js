describe('circular buffer', function() {
  var buffer;

  beforeEach(function() {
    buffer = new CircularBuffer();
  });

  xit('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

});