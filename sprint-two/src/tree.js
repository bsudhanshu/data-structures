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
};

treeMethods.contains = function(target, tree) {
  var flag = false;
  var searchTree = function(tree) {
    if (tree.value === target) {
      flag = true;
      }
    if (tree.children) {
      for (var i = 0; i < tree.children.length; i++) {
        searchTree(tree.children[i]);
      	}
      }
	}
   searchTree(this);
   return flag;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
