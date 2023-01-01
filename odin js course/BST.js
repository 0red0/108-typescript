//////####Binary Search Tree####///////
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
}

const tree1 = new tree(m);
console.log(tree1);
