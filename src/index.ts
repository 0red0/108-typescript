console.log(Math.floor(55.334));

// Type Annotation

let num: string;
num = "lol";

let wow = 4;

let all: any = "Elzero";
all = 100;

const nimo = "Oazo";

function add(n1: number, n2: string) {
   return n1 + n2;
}
console.log(add(1, "3"));

// Type Annotation with Arrays

let test1: string | number | boolean;

test1 = "A";
test1 = 11;
test1 = true;

let myFriends: string[] = ["Osama", "Ahmed", "Btngan"];

for (let i = 0; i < myFriends.length; i++) {
   console.log(myFriends[i].repeat(3));
}

const arrayOne: number[] = [1, 2, 3, 4];
const arrayTwo: string[] = ["A", "b", "C"];
const arrayThree: (string | number)[] = [5, 6, 7, "D", "z", "h"];
const arrayFour: (number | string | (string | boolean)[])[] = [
   4,
   8,
   3,
   6,
   7,
   "A",
   ["i", " e", " t"],
   [true, false],
];

// Type Annotation for functions

let showMsg = true;
function showDetails(name: string, age: number, salary: number): string {
   let test2 = 8;
   if (showMsg) {
      return `Hi ${name}, Your ${age} year old, Salary is ${salary} Test result =${test2}`;
   }
   return `No Data`;
}
console.log(showDetails("Yyvanii", 94, 4000));

// Functions optional Parameters
// optional parameter can never proceed default one

function showCase(name: string, age: number, country?: string) {
   return `${name}- ${age}- ${country}`;
}
console.log(showCase("Osama", 49));

// rest parameter

function addAll(...numb: number[]): number {
   let sum: number = 0;
   for (let i = 0; i < numb.length; i++) {
      sum += numb[i];
   }
   // numb.forEach((num) => (sum += num));
   return sum;
}
console.log(addAll(3, 100, 99.3, 5, 12.7));

function printInConsole(...kol: any[]) {
   for (let i = 0; i < kol.length; i++) {
      console.log(`The Value Is ${kol[i]} And Type Is ${typeof kol[i]}`);
   }
   return "done";
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
