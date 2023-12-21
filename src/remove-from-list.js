const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let currentNode = l;
  let temp = new ListNode();
  //console.log(currentNode.next);
  while (currentNode) {
      
      if (currentNode.value === k) {
          let tempNode = new ListNode();
          if(currentNode.next){
            tempNode.value = currentNode.next.value;
            tempNode.next = currentNode.next.next;
            currentNode.value = tempNode.value;
            currentNode.next = tempNode.next;
          } else {
              console.log(currentNode);
            temp.next = null;
            currentNode = temp;
            console.log(currentNode);
          }
      } else {
          temp = currentNode;
          console.log(temp);
          currentNode = currentNode.next;
      }
  }
  return l;
}

module.exports = {
  removeKFromList
};
