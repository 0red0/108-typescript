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
let test3 = "Elzero";
let test4 = 10;
test4 = "Osama";
function getActions(btns) {
    console.log(`Action for button up is ${btns.up}`);
    console.log(`Action for button right is ${btns.right}`);
    console.log(`Action for button down is ${btns.down}`);
    console.log(`Action for button left is ${btns.left}`);
    console.log(`Action for button X is ${btns.x}`);
}
getActions({ up: "upp", right: "rite", down: "dwn", left: "lft", x: true });
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(10, 10));
console.log(compare(10, 8));
console.log(compare(10, 12));
let article = [10, "titleOne", false];
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
function logging(mg) {
    console.log(mg);
    return;
}
console.log(logging("Iam a Massage"));
const fail = (msg) => {
    throw new Error(msg);
};
const kids = 15;
const easy = 9;
const medium = 6;
const hard = 3;
var level;
(function (level) {
    level[level["kids"] = 15] = "kids";
    level[level["easy"] = 9] = "easy";
    level[level["medium"] = 6] = "medium";
    level[level["hard"] = 3] = "hard";
})(level || (level = {}));
let lvl = "easy";
if (lvl === "easy") {
    console.log(`Level is ${lvl}, Time left is ${level.easy}`);
}
function getSec() {
    return 3;
}
var children;
(function (children) {
    children[children["five"] = 25] = "five";
    children[children["seven"] = 20] = "seven";
    children[children["ten"] = 15] = "ten";
})(children || (children = {}));
var diff;
(function (diff) {
    diff[diff["kid"] = 25] = "kid";
    diff[diff["easy"] = 8] = "easy";
    diff[diff["medium"] = 6] = "medium";
    diff[diff["hard"] = getSec()] = "hard";
})(diff || (diff = {}));
lvl = "medium";
if (lvl === "easy") {
    console.log(`Level is ${lvl}, Time left is ${level.easy}`);
}
function getActioons(btn) {
    console.log(`Hello ${btn.one}`);
    console.log(`Hello ${btn.two}`);
    console.log(`Hello ${btn.three}`);
}
getActioons({ one: "string", two: 10, three: true });
let obj = {
    user: "Osama",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "css",
    },
};
obj.id = 101;
obj.hire = false;
console.log(obj.id);
console.log(obj.skills.two);
function ins(n) {
    return Game.Hard - n;
}
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 40] = "Hard";
    Game[Game["Insane"] = ins(10)] = "Insane";
})(Game || (Game = {}));
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(Game.Insane);
//# sourceMappingURL=index.js.map