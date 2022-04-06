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
    if (currentNode === null) {
      this.root = new TreeNode(val)
      return
    }

    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(val)
        return
      }
      this.insert(val, currentNode.left)
    }

    if (val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = new TreeNode(val)
        return
      }
      this.insert(val, currentNode.right)
    }
  }

  search(val) {
    // Your code here
    //let currentNode = this.root
    // if(currentNode === null) return false;

    // if(this.root.val === val) return true;
    // this.search(val);

    let currentNode = this.root;
    while(currentNode)
    {
      // Want to reassign currentnode to one of its child nodes
      // Use if to evaluate
      if(currentNode.val > val) {
        currentNode = currentNode.left
      }
      else if(currentNode.val < val) {
        currentNode = currentNode.right
      }
      else{
        return true;
      }
    }
    return false
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
