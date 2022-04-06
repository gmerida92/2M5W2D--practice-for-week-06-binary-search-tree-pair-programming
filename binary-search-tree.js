// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode = this.root) {
    // Your code here
    if(currentNode === null) {
      let newNode = new TreeNode(val)
      this.root = newNode
      return;
    }

    // if(currentNode.left !== null)
    // {
    //   this.insert(val, currentNode.left)
    // }
    // else

    if(val < currentNode.val){
      if(currentNode.left === null)
      {
        let newNode = new TreeNode(val)
        currentNode.left = newNode
        return
      }
      this.insert(val, currentNode.left)
    }

    if(val > currentNode.val){
      if(currentNode.right === null)
      {
        let newNode = new TreeNode(val)
        currentNode.right = newNode
        return
      }
      this.insert(val, currentNode.right)
    }
  }

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };