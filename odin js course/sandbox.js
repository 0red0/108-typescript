function transformToObjects(numberArray) {
   // Todo: Add your logic
   // should return an array of objects
   const newArr = numberArray.map((el) => {
      return { val: el };
   });
   return newArr;
}

console.log(transformToObjects([1, 2, 3]));
