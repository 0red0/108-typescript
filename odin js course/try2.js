function Node(pos) {
   if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
      return null;
   }
   return pos;
}

function knightMoves([x, y], [a, b]) {
   let q = [Node([x, y])];
   let currentNode = q.shift();

   while (currentNode[0] !== a || currentNode[1] !== b) {
      let moves = [
         [currentNode[0] + 2, currentNode[1] - 1],
         [currentNode[0] + 2, currentNode[1] + 1],
         [currentNode[0] - 2, currentNode[1] - 1],
         [currentNode[0] - 2, currentNode[1] + 1],
         [currentNode[0] + 1, currentNode[1] - 2],
         [currentNode[0] + 1, currentNode[1] + 2],
         [currentNode[0] - 1, currentNode[1] - 2],
         [currentNode[0] - 1, currentNode[1] + 2],
      ];
      moves.forEach((move) => {
         let node = Node(move);
         if (node) {
            q.push(node);
         }
      });
      currentNode = q.shift();
      console.log(currentNode);
   }
   console.log(currentNode);
}
knightMoves([3, 3], [5, 2]);
