var CircularBuffer = function() {
    this.storage = [];
    this.startIndex = 0;
    this.currentIndex = 0;
    this.count = 0;
}

CircularBuffer.prototype.upDateIndex = function() {
  this.index++;
  if (this.index >= this.storage.length) {
    this.index = 0;
  }
}

CircularBuffer.prototype.upDateCount = function() {
  if (this.count < this.storage.length) {
    this.count++;
  }
}

CircularBuffer.prototype.append = function() {

}

CircularBuffer.prototype.remove = function() {

}

CircularBuffer.prototype.list = function() {

}

