// https://javascript.info/recursion#tasks
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

//
//
//
// let start = new Date();

// let end = new Date();
// let duration = end - start;
// console.log(duration);

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
//    let tmp = list;
//    while (tmp) {
//       console.log(tmp.value);
//       tmp = tmp.next;
//    }
// }
// printList(list);
// function printList(list) {
//    if (list == null) return;
//    console.log(list.value);
//    let tmp = list;
//    tmp = tmp.next;
//    printList(tmp);
// }

// printList(list);
