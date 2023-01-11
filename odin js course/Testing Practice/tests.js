// odin project testing practice
export function capitalize(string) {
   return (string = string[0].toUpperCase() + string.slice(1));
}

export function reverseStr(string) {
   return string.split("").reverse().join("");
}

export function add(a, b) {
   return a + b;
}

export function subtract(c, d) {
   return c - d;
}

////////////////////caesarCipher/////////////////////
// prettier-ignore
let ALPHA = {A: 0,B: 1,C: 2,D: 3,E: 4,F: 5,G: 6,H: 7,I: 8,J: 9,K: 10,L: 11,M: 12,N: 13,O: 14,P: 15,Q: 16,R: 17,S: 18,T: 19,U: 20,V: 21,W: 22,X: 23,Y: 24,Z: 25,};
// prettier-ignore
let alpha = {a:0,b:2,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25,};

// insert a letter in 'string' form & encryption shifter numeric value
function upperCipher(letter, shifter = 0) {
   let newPos = ALPHA[`${letter}`] + shifter;
   if (newPos > 25) {
      newPos = newPos - 25;
   }
   return Object.keys(ALPHA)[newPos];
}

function lowerCipher(letter, shifter = 0) {
   let newPos = alpha[`${letter}`] + shifter;
   if (newPos > 25) {
      newPos = newPos - 25;
   }
   return Object.keys(alpha)[newPos];
}

export function caesarCipher(string, shifter) {
   let newStr = string
      .split("")
      .map((x) => {
         let regMatch = !!x.match(/[^A-Z a-z]/);
         if (regMatch) {
            return x;
         } else {
            if (x == x.toUpperCase()) {
               return upperCipher(`${x}`, shifter);
            } else {
               return lowerCipher(`${x}`, shifter);
            }
         }
      })
      .join("");
   return newStr;
}

// console.log(caesarCipher("teztING", 7));

/////////////////OBJECT//////////////
export function analyzeArray(arr) {
   let myObj = {
      average: arr.reduce((a, b) => a + b) / arr.length,
      max: arr.reduce((a, b) => (a > b ? a : b)),
      min: Math.min(...arr),
      length: arr.length,
   };
   return myObj;
}
