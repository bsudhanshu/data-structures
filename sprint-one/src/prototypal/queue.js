var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.enqueueCounter = 0;
  newQueue.dequeueCounter = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.enqueueCounter] = value;
  this.enqueueCounter++;
};

queueMethods.dequeue = function() {
  this.dequeueCounter++;
  return this[this.dequeueCounter-1];      	
};

queueMethods.size = function() {
  if (this.enqueueCounter - this.dequeueCounter < 0) {
    return 0;
  }	else {
    return this.enqueueCounter - this.dequeueCounter;	
  }
};


