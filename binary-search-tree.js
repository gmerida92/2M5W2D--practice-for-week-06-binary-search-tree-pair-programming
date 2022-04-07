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
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val > val) {
        currentNode = currentNode.left
      }
      else if (currentNode.val < val) {
        currentNode = currentNode.right
      }
      else {
        return true;
      }
    }
    return false
  }


  preOrderTraversal(currentNode = this.root) {

    if (!currentNode) return;

    console.log(currentNode.val);

    this.preOrderTraversal(currentNode.left);

    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {

    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);

    console.log(currentNode.val);

    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {

    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);

    this.postOrderTraversal(currentNode.right);

    console.log(currentNode.val);
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
