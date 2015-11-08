describe('TODO circular buffer', function() {
  var buffer;

  beforeEach(function() {
    buffer = new CircularBuffer();
  });

  it('should have methods named "append", "remove", and "list"', function() {
    expect(buffer.append).to.be.a("function");
    expect(buffer.remove).to.be.a("function");
    expect(buffer.list).to.be.a("function");
  });

});