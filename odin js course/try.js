let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

//// sorting the array for BST

function mrgSort(arr) {
   if (arr.length < 2) return arr;
   const mid = Math.floor(arr.length / 2);
   let left = arr.slice(0, mid);
   let right = arr.slice(mid);
   return mrg(mrgSort(left), mrgSort(right));
}
/////merging and removing duplicates
function mrg(left, right) {
   let result = [];
   while (left.length && right.length) {
      if (left[0] < right[0]) {
         result.push(left.shift());
      } else if (right[0] < left[0]) {
         result.push(right.shift());
      } else if (left[0] == right[0]) {
         result.push(left.shift());
         right.shift();
      }
   }
   let sortedArray = [...result, ...left, ...right];
   return sortedArray;
}

let m = mrgSort(array);

console.log(m.join(" - "));

//// Fancy tree print

const prettyPrint = (node, prefix = "", isLeft = true) => {
   if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
   }
   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
   if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
   }
};

/////Node constructor
class Node {
   constructor(data = null, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
   }
}

class tree {
   constructor(arr) {
      this.root = this.buildTree(arr, 0, arr.length - 1);
      prettyPrint(this.root);
   }

   buildTree(arr, start, end) {
      if (start > end) return null;

      let rootIndex = Math.floor((start + end) / 2);
      let root = new Node(arr[rootIndex]);

      root.left = this.buildTree(arr, start, rootIndex - 1);
      root.right = this.buildTree(arr, rootIndex + 1, end);
      return root;
   }
   insert(value, root = this.root) {
      if (root == null) {
         return (root = new Node(value));
      }
      if (root.data < value) {
         root.right = this.insert(value, root.right);
      } else {
         root.left = this.insert(value, root.left);
      }
      prettyPrint(this.root);
      return root;
   }
   findMin() {
      let current = this.root;
      while (current.left) {
         current = current.left;
      }
      return current.data;
   }
   findMax() {
      let current = this.root;
      while (current.right) {
         current = current.right;
      }
      return current.data;
   }
   find(value, root = this.root) {
      if (root == null) return false;
      if (root.data == value) return true;
      if (root.data > value) {
         return this.find(value, root.left);
      } else {
         return this.find(value, root.right);
      }
   }
   remove(data) {
      const removeNode = function (node, data) {
         if (node == null) return null;

         if (data == node.data) {
            //node has no children
            if (node.left == null && node.right == null) return null;
            //node has no left child
            if (node.left == null) return node.right;
            //node has no right child
            if (node.right == null) return node.left;
            //node has two children
            let tmpNode = node.right;
            while (tmpNode.left) {
               tmpNode = tmpNode.left;
            }
            node.data = tmpNode.data;
            node.right = removeNode(node.right, tmpNode.data);
            return node;
         } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
         } else {
            node.right = removeNode(node.right, data);
            return node;
         }
      };
      this.root = removeNode(this.root, data);
      prettyPrint(this.root);
   }
   levelOrder(root = this.root) {
      let result = [];
      let queue = [];
      if (root == null) return;
      queue.push(root);
      while (queue.length) {
         let current = queue.shift();
         result.push(current.data);

         if (current.left) queue.push(current.left);
         if (current.right) queue.push(current.right);
      }
      return result;
   }
}

const tree1 = new tree(m);

tree1.insert(11);
tree1.remove(4);
console.log(tree1.levelOrder());

// console.log(tree1.find(99));
// console.log(tree1.findMax());
// console.log(tree1);
