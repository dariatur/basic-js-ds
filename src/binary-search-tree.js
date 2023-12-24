const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  head;

  constructor(){
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    let current = this.head;
    if (!this.head) {
      this.head = new Node(data);
    } else {
      current = this.#addNode(this.head, data);
    }

    return current;
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    if(!this.head){
      return null;
    }
    
    return this.#findNode(this.head, data);
  }

  remove(data) {
    let current = this.head;
    
    current = this.#removeFromTree(current, data);
  }

  min() {
    if(!this.head){
      return null;
    }
    let current = this.head;
    while(current.left){
      current = current.left;
    }
    return current.data;
  }

  max() {
    if(!this.head){
      return null;
    }
    let current = this.head;
    while(current.right){
      current = current.right;
    }
    return current.data;
  }

  #addNode(node, data){
    if(!node){
      return new Node(data);
    }

    if(node.data === data){
      return node;
    }
    
    if(node.data < data){
      if(node.right){
        return this.#addNode(node.right, data);
      } else {
        node.right = new Node(data);
        return node.right;
      }
    } else {
      if(node.left){
        return this.#addNode(node.left, data);
      } else {
        node.left = new Node(data);
        return node.left;
      }
    }
  }

  #findNode(node, data){
    if(!node){
      return null;
    }

    if(node.data === data){
      return node;
    }

    if(node.data<data){
      return this.#findNode(node.right, data);
    } else {
      return this.#findNode(node.left, data);
    }
  }

  #removeFromTree(node, data){
    if (!node) {
      return null;
    }

    if(node.data > data) {
      if(node.left){
        node.left = this.#removeFromTree(node.left, data);
      }

      return node;
    } else if(node.data < data) {
      if(node.right){
        node.right = this.#removeFromTree(node.right, data);
      }

      return node;
    } else {
      if(!node.right && !node.left){
        return null;
      }

      if(!node.right){
        node = node.left;
        return node;
      }
      
      if(!node.left){
        node = node.right;
        return node;
      }
      
      let currElem = node.right;

      while(currElem.left){
        currElem = currElem.left;
      }

      node.data = currElem.data;
  
      node.right = this.#removeFromTree(node.right, node.data);
      return node;
    }
}
}

module.exports = {
  BinarySearchTree
};