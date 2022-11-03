"use strict";
console.log(Math.floor(55.334));
let num;
num = "lol";
let wow = 4;
let all = "Elzero";
all = 100;
const nimo = "Oazo";
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, "3"));
let test1;
test1 = "A";
test1 = 11;
test1 = true;
let myFriends = ["Osama", "Ahmed", "Btngan"];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
const arrayOne = [1, 2, 3, 4];
const arrayTwo = ["A", "b", "C"];
const arrayThree = [5, 6, 7, "D", "z", "h"];
const arrayFour = [
    4,
    8,
    3,
    6,
    7,
    "A",
    ["i", " e", " t"],
    [true, false],
];
let showMsg = true;
function showDetails(name, age, salary) {
    let test2 = 8;
    if (showMsg) {
        return `Hi ${name}, Your ${age} year old, Salary is ${salary} Test result =${test2}`;
    }
    return `No Data`;
}
console.log(showDetails("Yyvanii", 94, 4000));
function showCase(name, age, country) {
    return `${name}- ${age}- ${country}`;
}
console.log(showCase("Osama", 49));
function addAll(...numb) {
    let sum = 0;
    for (let i = 0; i < numb.length; i++) {
        sum += numb[i];
    }
    return sum;
}
console.log(addAll(3, 100, 99.3, 5, 12.7));
function printInConsole(...kol) {
    for (let i = 0; i < kol.length; i++) {
        console.log(`The Value Is ${kol[i]} And Type Is ${typeof kol[i]}`);
    }
    return "done";
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=index.js.map