//https://www.theodinproject.com/lessons/javascript-recursion

// const fibsIterate = (num) => {
//    let res = [0, 1];
//    for (let i = 0; i < num - 2; i++) {
//       res.push(res[i] + res[i + 1]);
//    }
//    return res;
// };

//recursion really depending on saving the value of previous reced value until the hard coded case return and start saving new value up the callstack

const fibsRec = (n) => {
   if (n === 2) return [0, 1];
   const res = fibsRec(n - 1);
   res.push(res[res.length - 1] + res[res.length - 2]);
   return res;
   // return n <= 1 ? n : fibsRec(n - 1) + fibsRec(n - 2);
};

// console.log(fibsIterate(8));
console.log(fibsRec(8));

function fibRec(n) {
   if (n < 2) return [0];
   if (n < 3) return [0, 1];
   let arr = fibRec(n - 1);
   arr.push(arr[n - 2] + arr[n - 3]);
   return arr;
}
console.log(fibRec(8));
