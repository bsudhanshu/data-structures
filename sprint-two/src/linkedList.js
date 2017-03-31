var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.tail = Node(value);
    if (list.head === null) { 
      list.head = Node(value);
    } else {
      var currentNode = list.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = Node(value);
    }
  };

  list.removeHead = function() {
    var formerHead;
    if (list.head !== null) {
      formerHead = list.head;
      list.head = list.head.next;
    } else {
      formerHead = null;
    }
    return formerHead.value;
  };

  list.contains = function(target) {
    if (list.head === null) {
      return false;
    }

    if (list.head.value === target) {
      return true;
    }

    while (list.head.next !== null) {
      if (list.head.value === target) {
        return true;
      } else {
        list.head = list.head.next;
        if (list.head.value === target) {
          return true;
        }
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//{val: 4,
//next: {val: 5,
            //next: {val: 6,
                    //next: null}}}