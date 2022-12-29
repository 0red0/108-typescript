//////////////////////////////////Fibonacci's [1]

function fib(n) {
   let fibArr = [0, 1];
   for (let i = 0; i < n - 2; i++) {
      fibArr.push(fibArr[i] + fibArr[i + 1]);
      // fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
   }
   return fibArr;
}
console.log(fib(8));

//////////////////////////////////Fibonacci's [2]

function fibRec(n) {
   if (n < 3) return [0, 1];
   const recArr = fibRec(n - 1);
   recArr.push(recArr[n - 2] + recArr[n - 3]);
   return recArr;
}
console.log(fibRec(8));

//////////////////////////////////////////Merge Sort

function mrgSort(arr) {
   if (arr.length < 2) return arr;
   const mid = Math.floor(arr.length / 2);
   let leftArr = arr.slice(0, mid);
   let rightArr = arr.slice(mid);

   return mergeAll(mrgSort(leftArr), mrgSort(rightArr));
}

function mergeAll(leftArr, rightArr) {
   const sortedArr = [];
   while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
         sortedArr.push(leftArr.shift());
      } else {
         sortedArr.push(rightArr.shift());
      }
   }
   return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mrgSort([9, 23, 8, 0, 12, 7]));
