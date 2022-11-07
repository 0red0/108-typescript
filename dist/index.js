"use strict";
console.log(Math.floor(55.334));
// Type Annotation
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
// Type Annotation with Arrays
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
// Type Annotation for functions
let showMsg = true;
function showDetails(name, age, salary) {
    let test2 = 8;
    if (showMsg) {
        return `Hi ${name}, Your ${age} year old, Salary is ${salary} Test result =${test2}`;
    }
    return `No Data`;
}
console.log(showDetails("Yyvanii", 94, 4000));
// Functions optional Parameters
// optional parameter can never proceed default one
function showCase(name, age, country) {
    return `${name}- ${age}- ${country}`;
}
console.log(showCase("Osama", 49));
// rest parameter
function addAll(...numb) {
    let sum = 0;
    for (let i = 0; i < numb.length; i++) {
        sum += numb[i];
    }
    // numb.forEach((num) => (sum += num));
    return sum;
}
console.log(addAll(3, 100, 99.3, 5, 12.7));
// rest example 2
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
// Tuple
let article = [10, "titleOne", false];
// article.push(12);
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
// Void & Never
function logging(mg) {
    console.log(mg);
    return;
}
console.log(logging("Iam a Massage"));
const fail = (msg) => {
    //never function
    throw new Error(msg);
};
// enums [Enumerations]
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
// Type annotation Object
let obj = {
    user: "Osama",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "css",
    },
};
// obj.user = "Elzero"
obj.id = 101;
obj.hire = false;
console.log(obj.id);
console.log(obj.skills.two);
let user = {
    id: 111,
    username: "Osama",
    country: "Turkey",
};
function getData(data) {
    console.log(`Id is ${data.id}`);
    console.log(`User is ${data.username}`);
    console.log(`Country is ${data.country}`);
}
getData(user);
let test6 = {
    id: 111,
    username: "Osama",
    country: "Turkey",
    sayHi() {
        return `hi ${this.username}`;
    },
    sayWelcome: () => `welcome`,
    getDouble(n) {
        return n * 2;
    },
};
console.log(test6.getDouble(54));
console.log(test6.sayHi());
console.log(test6.sayWelcome());
let userSettings = {
    theme: true,
    font: "serif",
    sidebar: false,
};
let admin = {
    id: 222,
    username: "elzero",
    country: "eg",
    protect: true,
};
console.log(admin);
// Class Type Annotation
class User {
    constructor(user, salary) {
        this.u = user;
        this.s = salary;
        this.m = () => `Hello`;
    }
    sayMsg() {
        return `Message`;
    }
}
let newUser = new User("Zero", 3030);
console.log(newUser.u);
console.log(newUser.s);
console.log(newUser.m());
console.log(newUser.sayMsg());
// Class Get & Set
class User2 {
    constructor(_user, salary) {
        this._user = _user;
        this.salary = salary;
        this.m = () => `Hello ${this.user}`;
    }
    sayMsg() {
        return `Message`;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
}
let user3 = new User2("sljf", 98352);
console.log(user3.m());
console.log(user3.user);
// console.log(user3.salary);
console.log(user3.sayMsg());
user3.user = "Changed";
console.log(user3.user);
// Class Static Members
class User4 {
    constructor(_username2) {
        this._username2 = _username2;
        User4.created++;
    }
    static getCount() {
        console.log(`${this.created} Objects created.`);
    }
}
User4.created = 0;
let u1 = new User4("Elzero");
let u2 = new User4("Web");
let u3 = new User4("School");
console.log(User4.created);
User4.getCount();
class User5 {
    constructor(user, theme) {
        this.user = user;
        this.theme = theme;
    }
    save() {
        console.log(`Saved`);
    }
    update() {
        console.log(`updated`);
    }
}
let user6 = new User5("Elzero", true);
console.log(user6.theme);
console.log(user6.user);
user6.save();
user6.update();
///   Abstract Classes and members
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Pizza Cooking time is 1 Hour`);
    }
}
let pizza1 = new Pizza("Awe Pizza", 123);
console.log(pizza1.title);
console.log(pizza1.price);
pizza1.getCookingTime();
// Polymorphism and Method override
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(`Attacking Now`);
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        console.log(`With spears`);
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        console.log(`With Axe`);
        this.axeDurability -= 1;
    }
}
let barbAttack = new Barbarian("Snakoll", 100);
console.log(barbAttack.name);
barbAttack.attack();
console.log(barbAttack.axeDurability);
// Generic Introduction
function returnString(val) {
    return val;
}
function returnType(val) {
    return val;
}
console.log(returnType(110));
console.log(returnType("Elzeroo"));
console.log(returnType(true));
console.log(returnType([1, 2, 3, 4, 5]));
//Generics Multiple Types
const showData = (val1, val2) => {
    return `The first Value ${val1} & The second ${val2}`;
};
console.log(showData("Osama", 600));
// Generics => classes
class User7 {
    constructor(value) {
        this.value = value;
    }
    show1(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let user8 = new User7("elzero");
console.log(user8.value);
user8.show1("Msg 1");
let user9 = new User7(101);
console.log(user9.value);
user9.show1("Msg 2");
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let item1 = new Collection();
item1.add({ itemType: "Book", title: "Atomic shit", isbn: 39821 });
item1.add({ itemType: "Book", title: "lets & go", isbn: 2380 });
console.log(item1);
let item2 = new Collection();
item2.add({ itemType: "game", title: "Gear solider", price: 391 });
item2.add({ itemType: "game", title: "Kits for life", price: 20 });
console.log(item2);
//////// Assignments
// // Do Not Edit
// type numandstring = number | string;
// abstract class Game {
//    constructor(public title: string, public price: numandstring) {}
//    abstract getLocation(): string;
//    abstract getDiscount(): string;
// }
// // Start Edit And Fix
// class RPG extends Game {
//    constructor(title: string, price: numandstring, public rate: number) {
//       super(title, price);
//    }
//    getDiscount(): string {
//       return `Discount`;
//    }
//    getLocation(): string {
//       return `Location`;
//    }
// }
// class Action extends Game {
//    constructor(
//       title: string,
//       price: numandstring,
//       public rate: number,
//       public company: string
//    ) {
//       super(title, price);
//    }
//    getDiscount(): string {
//       return `Discount`;
//    }
//    getLocation(): string {
//       return `Location`;
//    }
// }
// // End Edit And Fix
// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");
// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"
// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"
function showTypes(a, b, c) {
    return `${a !== null && a !== void 0 ? a : "Nothing"} - ${b !== null && b !== void 0 ? b : "Nothing"} - ${c !== null && c !== void 0 ? c : "Nothing"}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
//# sourceMappingURL=index.js.map