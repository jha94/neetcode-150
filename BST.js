// Node
// BST
// isEmpty
// insert
// insertNode
// search
// traversal (inorder, preorder, postorder)

const Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

const BST = function () {
  this.root = null;
};

BST.prototype.isEmpty = function () {
  return this.root === null;
};

BST.prototype.insert = function (value) {
  const node = new Node(value);
  if (this.root === null) {
    this.root = node;
  } else {
    this.insertNode(this.root, node);
  }
};

BST.prototype.insertNode = function (root, node) {
  if (root.value >= node.value) {
    if (root.left === null) {
      root.left = node;
    } else {
      this.insertNode(root.left, node);
    }
  } else {
    if (root.right === null) {
      root.right = node;
    } else {
      this.insertNode(root.right, node);
    }
  }
};

BST.prototype.search = function (root, value) {
  if (root.value === value) {
    return true;
  } else if (root.value > value) {
    this.search(root.left, value);
  } else {
    this.search(root.right, value);
  }
  return false;
};

BST.prototype.inorder = function (root) {
  if (root === null) {
    return "Oops! no data available";
  }
  this.inorder(root.left);
  console.log(root.value);
  this.inorder(root.right);
};

BST.prototype.preorder = function (root) {
  if (root === null) {
    return "Oops! no data available";
  }
  console.log(root.value);
  this.preorder(root.left);
  this.preorder(root.right);
};

BST.prototype.postorder = function (root) {
  if (root === null) {
    return "Oops! no data available";
  }

  this.postorder(root.left);
  this.postorder(root.right);
  console.log(root.value);
};

BST.prototype.invert = function (tree) {
  const root = [tree];
  while (root?.length) {
    const node = root.shift();
    if (node) {
      [node.left, node.right] = [node.right, node.left];
      root.push(node.left, node.right);
    }
  }
  return tree;
};

BST.prototype.depth = function (root) {
  const current = [root];
  let depth = 0;
  while (current?.length) {
    const node = current.shift();
    if (node) {
      current.push(node.left);
      current.push(node.right);
      depth++;
    }
  }
  return depth;
};

BST.prototype.isSameTree = function (t1, t2) {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  if (t1.value === t2.value) {
    return (
      this.isSameTree(t1.left, t2.left) && this.isSameTree(t1.right, t2.right)
    );
  }
  return false;
};

// BST.prototype.levelOrderTraversal = function (root) {
//   let res = [];
//   function traverse(node, level) {
//     if (!node) return false;
//     if (res.length === level) {
//       res.push([]);
//     }
//     res[level].push(node.value);
//     traverse(node.left, level + 1);
//     traverse(node.right, level + 1);
//   }
//   traverse(root, 0);
//   return res;
// };

const bst = new BST();
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(5);
// console.log(bst.levelOrderTraversal(bst.root));

const bst2 = new BST();
bst2.insert(2);
bst2.insert(1);
bst2.insert(3);
bst2.insert(5);
console.log(bst.isSameTree(bst.root, bst2.root));

// bst.inorder(bst.root);
// const root = bst.invert(bst.root);
// bst.inorder(root);
// bst.levelOrderTraversal(bst.root);
console.log(bst.depth(bst.root));
// bst.preorder(bst.root);
// bst.postorder(bst.root);
// console.log(bst.isSameTree(bst.root, bst2.root));
// console.log(bst.validateBST(bst.root));
