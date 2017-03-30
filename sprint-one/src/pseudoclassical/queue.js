var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.enqueueCounter = 0;
  this.dequeueCounter = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.enqueueCounter] = value;
  this.enqueueCounter++;
};

Queue.prototype.dequeue = function() {
  this.dequeueCounter++;
  return this[this.dequeueCounter - 1];
};

Queue.prototype.size = function(value) {
  if(this.enqueueCounter - this.dequeueCounter < 0) {
    return 0;
  } else {
    return this.enqueueCounter - this.dequeueCounter;
  }	
};

var newQueue = new Queue();


