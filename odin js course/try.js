// ////// Knight's Travails or Tour challenge.

function overBoard(x) {
   if (x[0] < 0 || x[0] > 7 || x[1] < 0 || x[1] > 7) return null;
   return x;
}

let node = [3, 3];
let y = [3, 1];
let q = [];
let path = [node];

while (node[0] !== y[0] || node[1] !== y[1]) {
   path.push(node);
   let moves = [
      [node[0] + 1, node[1] + 2],
      [node[0] + 1, node[1] - 2],
      [node[0] - 1, node[1] + 2],
      [node[0] - 1, node[1] - 2],
      [node[0] + 2, node[1] + 1],
      [node[0] + 2, node[1] - 1],
      [node[0] - 2, node[1] + 1],
      [node[0] - 2, node[1] - 1],
   ];

   moves.forEach((m) => {
      let nm = overBoard(m);
      if (nm) {
         q.push(nm);
      }
   });
   node = q.shift();
}
console.log(node);
console.log(path);
