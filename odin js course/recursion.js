// https://javascript.info/recursion#tasks
//// every time u use a loop, u can use recursion instead.
///  but not the other way around

// function rep(n) {
//    if (n == 0) return;
//    console.log(n);
//    rep(n - 1);
// }
// rep(10);

// let t = 0;
// function sumTo(n) {
//    for (let i = 0; i <= n; i++) {
//       t += i;
//       console.log(t);
//    }
// }
// sumTo(10);

// let t = 0;
// function sumTo(n) {
//    for (let i = n; i >= 0; i--) {
//       t += i;
//    }
//    console.log(t);
// }
// sumTo(10);

// function sumR(n, tt = 0) {
//    if (n == 0) return tt;

//    return sumR(n - 1, tt + n);
// }
// console.log(sumR(10));

//// Arithmetic progression - Arithmetic series (sum)

// function sum(n) {
//    return (n * (1 + n)) / 2;
// }
// console.log(sum(10));

//// Factorial function (multiply by) X (n - 1)

// let t = 1;
// function sumTo(n) {
//    for (let i = 1; i <= n; i++) {
//       t *= i;
//    }
//    console.log(t);
// }
// sumTo(5);

// function factorial(n, tt = 1) {
//    if (n <= 1) return tt;

//    return factorial(n - 1, tt * n);
// }
// console.log(factorial(5));

// function factorial(n) {
//    return n ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(5)); // 120

// callstacked 5 * !4
//    callstacked 4 * !3
//       callstacked 3 * !2
//          callstacked 2 * !1
//             callstacked 1 * !0
//             return 1 // when returning 1 it breaks the recursion <no more loop>
//             return 1 * 1 = 1
//          return 2 * 1 = 2
//       return 3 * 2 = 6
//    return 4 * 6 = 24
// return 5 *24 = 120

////// Fibonacci numbers

// (n) = (n-1) + (n-2)
// n = 1.6 * (n-1)

// phi = 1.6180339887498948482045868;
// phi = (1 + Math.sqrt(5)) / 2;

// function createFib(n) {
//    return (phi ** n - (1 - phi) ** n) / Math.sqrt(5);
// }
// console.log(createFib(77));

// function fib(n) {
//    let a = 1;
//    let b = 1;
//    for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//    }
//    return b;
// }

// console.log(fib(77)); // 5527939700884757

// Linked list
let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
            value: 4,
            next: null,
         },
      },
   },
};

// function printList(list) {
//   let tmp = list;
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }
// printList(list);
// function printList(list) {
//   if (list == null) return;
//   console.log(list.value);
//   let tmp = list;
//   tmp = tmp.next;
//   printList(tmp);
// }

// printList(list);

// const tree = {
//    name: "john",
//    children: [
//       {
//          name: "jim",
//          children: [],
//       },
//       {
//          name: "zoe",
//          children: [
//             { name: "kyle", children: [] },
//             { name: "sophia", children: [] },
//          ],
//       },
//    ],
// };

// function printChildren(tree) {
//    if (tree.children.length === 0) {
//       return;
//    }
//    tree.children.forEach((child) => {
//       console.log(child.name);
//       printChildren(child);
//    });
// }
// printChildren(tree);

// exercises
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
//[1]
// function sumAll(n, total = 0) {
//   if (n == 0) return total;

//   return sumAll(n - 1, total + n);
// }
// console.log(sumAll(3));

//[2]
// function power(n, p) {
//   return n ** p;
// }
// console.log(power(2, 4));

// function power(n, p) {
//   return p === 0 ? 1 : n * power(n, p - 1);
// }
// console.log(power(2, 4));

//[3]
// function fac(n) {
//    return n ? n * fac(n - 1) : 1;
// }
// console.log(fac(5));

//[4]
// n = [1, 2, 9];
// console.log(n.map((v) => (v == 2 ? console.log(true) : console.log(false))));
// function checkAll(n) {
//    for (let i = 0; i < n.length; i++) {
//       if (n[i] < 7) return false;
//       if (n[i] > 7) return true;
//    }
// }
// console.log(checkAll(n));

//iterate over array using recursion
// function rec(arr) {
//    if (arr.length == 0) return;
//    console.log(arr[0]);
//    arr.shift();
//    rec(arr);
// }
// rec(n);

// function rec(arr) {
//    if (arr.length == 0) return false;
//    console.log(arr[0]);
//    arr.shift();
//    if (arr[0] > 7) {
//       console.log(true);
//       return;
//    }
//    rec(arr);
// }
// rec(n);

//[5]

// function facto(arr, tmp = 1) {
//    if (arr.length == 0) {
//       console.log(tmp);
//       return;
//    }
//    tmp *= arr[0];
//    arr.shift();
//    facto(arr, tmp);
// }
// console.log(facto([1, 2, 3, 10]));

// [6]
// let nestedObject = {
//    data: {
//       info: {
//          stuff: {
//             thing: {
//                moreStuff: {
//                   magicNumber: 44,
//                   something: "foo2",
//                },
//             },
//          },
//       },
//    },
// };

//iterate over nested object values

// function check(obj) {
//    l = Object.keys(obj).length;
//    if (l == 0) return;

//    newObj = Object.values(obj)[0];
//    Object.values(obj).forEach((v) => console.log(v));
//    check(newObj);
// }
// check(nestedObject);

// function contains(obj, x) {
//    for (var key in obj) {
//       if (typeof obj[key] === "object") return contains(obj[key], x);
//       if (obj[key] === x) {
//          return true;
//       }
//    }
//    return false;
// }

// console.log(contains(nestedObject, 44));
// console.log(contains(nestedObject, "foo"));

// [7]
// var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); //7

// function totalIntegers(arr) {
//    if (arr.length == 0) return 0;

//    let t = 0;
//    let first = arr.shift();

//    if (Array.isArray(first)) {
//       t += totalIntegers(first);
//    }
//    if (Number.isInteger(first)) {
//       t += 1;
//    }
//    return t + totalIntegers(arr);
// }
// console.log(seven);

// [8]
// var l = [1, 2, 3];
// l = [10, [[10], 10], [10]];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// function SumSquares(arr) {
//    if (arr.length == 0) return 0;

//    let t = 0;
//    let first = arr.shift();

//    if (Array.isArray(first)) {
//       t += SumSquares(first);
//    }
//    if (Number.isInteger(first)) {
//       t += first * first;
//    }
//    return t + SumSquares(arr);
// }

// [9]

// function replicate(r, n) {
//    let arr = [];
//    for (let i = 0; i < r; i++) {
//       arr.push(n);
//    }
//    return arr;
// }

// function replicate(r, n, arr = []) {
//    if (r <= 0) return arr;
//    arr.push(n);
//    return replicate(r - 1, n, arr);
// }

// console.log(replicate(3, 5)); // [5, 5, 5]
// console.log(replicate(1, 69)); // [69]
// console.log(replicate(-2, 6)); // []

// function replicate(r, n){
// 	if(r <= 0) return [];
// 	return [n].concat(replicate(r - 1, n));
// }
