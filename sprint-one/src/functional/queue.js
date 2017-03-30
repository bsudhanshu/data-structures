var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqueueCounter = 0;
  var dequeueCounter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enqueueCounter] = value;
    enqueueCounter++;
  };

  someInstance.dequeue = function() {
    dequeueCounter++;
    return storage[dequeueCounter-1];
  };

  someInstance.size = function() {
    if (enqueueCounter-dequeueCounter < 0) {
      return 0;
    } else {
      return enqueueCounter-dequeueCounter;
    } 
  };

  return someInstance;
};
