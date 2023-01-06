//www.youtube.com/watch?v=js5DMimne-s

https: function knight(start, end) {
   const board = {};
   board[JSON.stringify(start)] = 0;
   const q = [start];
   let loc;
   while (!(q[0][0] === end[0] && q[0][1] === end[1])) {
      loc = q.shift();
      const moves = checkMoves(getMoves(loc));
      moves.forEach((move) => {
         q.push(move);
         board[JSON.stringify(move)] = board[JSON.stringify(loc)] + 1;
      });
   }
   console.log(loc);
   return `Moves = ` + board[JSON.stringify(end)];
}

function getMoves(loc) {
   const moves = [];
   moves.push([loc[0] + 1, loc[1] - 2]);
   moves.push([loc[0] + 1, loc[1] + 2]);
   moves.push([loc[0] - 1, loc[1] - 2]);
   moves.push([loc[0] - 1, loc[1] + 2]);
   moves.push([loc[0] + 2, loc[1] - 1]);
   moves.push([loc[0] + 2, loc[1] + 1]);
   moves.push([loc[0] - 2, loc[1] - 1]);
   moves.push([loc[0] - 2, loc[1] + 1]);
   return moves;
}
function checkMoves(moves) {
   return moves.filter((move) => {
      return move[0] >= 1 && move[0] <= 8 && move[1] >= 1 && move[1] <= 8;
   });
}

knight([3, 3], [4, 3]);
