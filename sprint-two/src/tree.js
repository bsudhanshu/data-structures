var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
  console.log(this)
};

treeMethods.contains = function(target) {
  var truthTest = function (child) {
  	if (this.children.length === 0) {
  		return false;
  	}
    if (child.value === target) {
      return true;
    } else {
      for (var i = 0; i < child.children.length; i++) {
        truthTest(child.children[i]);
      }	
    }
    return false;
  };
  return truthTest(this); 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
