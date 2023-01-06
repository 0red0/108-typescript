//odin shortest solution ever works
//https://github.com/ARZ-barca/knights-travails/blob/main/knight.js

function Node(pos, path) {
   // To stop moves out of the board
   if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
      return null;
   }
   return { pos, path }; // giving a nickname to element in that position
}

function knightMoves([x, y], [a, b]) {
   let q = [Node([x, y], [[x, y]])];
   let currentNode = q.shift();

   while (currentNode.pos[0] !== a || currentNode.pos[1] !== b) {
      let moves = [
         [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
         [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
         [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
         [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
         [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
         [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
         [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
         [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
      ];
      moves.forEach((move) => {
         let node = Node(move, currentNode.path.concat([move]));
         if (node) {
            q.push(node);
         }
      });
      currentNode = q.shift();
   }
   // prettier-ignore
   console.log(`=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`);
   currentNode.path.forEach((pos) => {
      console.log(pos);
   });
}
knightMoves([3, 3], [4, 3]);

// => You made it in 3 moves!  Here's your path:
//  [3, 3]
//  [5, 2]
//  [3, 1]
//  [4, 3]

///////////////pseudo code trying to understand how it works

// function node(pos, path) {
//    return { pos, path };
// }
// let p = [node([1, 2], [[3, 4]])];
// let c = p.shift();
// let p2 = [node([5, 5], [[7, 7]])];
// c = p.shift();
// console.log(c);

// knightMoves([3,3],[4,3]){
//    let q = [Node([3,3],[[3,3]])]
//    // >>  q = [{pos: [3,3],path: [[3,3]]}]
//    let currentNode = q.shift
//    // >> { pos: [ 3, 3 ], path: [ [3, 3] ] }
//    while(3 !== 4 || 1 !== 3){
//       let moves = [
//                   [5 + 2 , 2 - 1],
//                   [5 + 2 , 2 + 1],
//                   [5 - 2 , 2 - 1],<<<
//                   [5 - 2 , 2 + 1],
//                   [5 + 1 , 2 - 2],
//                   [5 + 1 , 2 + 2],
//                   [5 - 1 , 2 - 2],
//                   [5 - 1 , 2 + 2],]

//       moves.forEach(move => {
//          let node = Node([5,2], [[3,3] , [5,2]])
//       {pos: [5,2] , path: [[3,3],[5,2],[7,1]]}
//       {pos: [5,2] , path: [[3,3],[5,2],[7,3]]}
//       {pos: [5,2] , path: [[3,3],[5,2],[3,1]]}<<<

//       {pos: [3,1] , path: [[3,3],[5,2],[3,1],[5,2]]}
//       {pos: [3,1] , path: [[3,3],[5,2],[3,1],[5,4]]}
//       {pos: [3,1] , path: [[3,3],[5,2],[3,1],[1,2]]}
//       {pos: [3,1] , path: [[3,3],[5,2],[3,1],[1,4]]}
//       {pos: [3,1] , path: [[3,3],[5,2],[3,1],[4,3]]}<<<
//       {pos: [3,1] , path: [[3,3],[5,2],[3,1],[2,1]]}
//       {pos: [3,1] , path: [[3,3],[5,2],[3,1],[2,3]]}

//      // q.push(node) >> {1,}
//              // >>
//      currentNode =
//     //  {pos: [3,3], path: [[3, 3]]},
//      {pos: [5,2] , path: [[3,3],[5,2]]}
//      {pos: [7,1] , path: [[3,3],[5,2],[7,1]]}
//      {pos: [7,1] , path: [[3,3],[5,2],[7,1]]}
//          //

//       })
//    }
// }
