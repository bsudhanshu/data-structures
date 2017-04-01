var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this[item] = item;
};

setPrototype.contains = function(item) {
  if (item in this) {
  	return true;
  }
  return false;
};

setPrototype.remove = function(item) {
 delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
