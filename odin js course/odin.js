// es15 constructor example
// class Book {
//    constructor(title, author, pages, read) {
//       this.title = title;
//       this.author = author;
//       this.pages = pages;
//       this.read = function () {
//          if (read) return `read`;
//          return `not read yet`;
//       };
//    }
//    info = function () {
//       return `${this.title} by ${this.author}, ${
//          this.pages
//       } pages, ${this.read()}`;
//    };
// }
// const theHobbit = new Book("The Hobbit", "J.RR Tolkien", 295, true);
// console.log(theHobbit.info());

// ///// simple traditional constructor example
function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = function () {
      if (read) return `read`;
      return `not read yet`;
   };
   this.info = function () {
      return `${title} by ${author}, ${pages} pages, ${this.read()}`;
   };
}
const theHobbit = new Book("The Hobbit", "J.RR Tolkien", 295, true);
console.log(theHobbit.info());

//// Prototype example
//https://stackoverflow.com/questions/9772307/declaring-javascript-object-method-in-constructor-function-vs-in-prototype/9772864#9772864
// prototype is common methods between objects that comes form a class
class Dog {
   constructor(name) {
      this.name = name;

      var barkCount = 0;

      this.bark = function () {
         barkCount++;
         alert(this.name + " bark");
      };

      this.getBarkCount = function () {
         alert(this.name + " has barked " + barkCount + " times");
      };
   }
}
Dog.prototype.wagTail = function () {
   alert(this.name + " wagging tail");
};
var dog = new Dog("Dave");
dog.bark();
dog.bark();
dog.getBarkCount();
dog.wagTail();

/// Factory Functions

const personFactory = (name, age) => {
   const sayHello = () => console.log("hello!");
   return { name, age, sayHello };
};

const jefff = personFactory("jeff", 27);
console.log(jeff.name); // 'jeff'
jeff.sayHello(); // calls the function and logs 'hello!'

// same thing created using the constructor pattern

class Person {
   constructor(name, age) {
      this.sayHello = () => console.log("hello!");
      this.name = name;
      this.age = age;
   }
}
const jeff = new Person("jeff", 27);

// check out this little hack

const name2 = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

console.log(name2, color, number, food); // Maynard red 34 rice

console.log({ name2, color, number, food });
// { name2: 'Maynard', color: 'red', number: 34, food: 'rice' }

// factories example

const Player = (name, level) => {
   let health = level * 2;
   const getLevel = () => level;
   const getName = () => name;
   const die = () => {
      // uh oh
   };
   const damage = (x) => {
      health -= x;
      if (health <= 0) {
         die();
      }
   };
   const attack = (enemy) => {
      if (level < enemy.getLevel()) {
         damage(1);
         console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
         enemy.damage(1);
         console.log(`${name} has damaged ${enemy.getName()}`);
      }
   };
   return { attack, damage, getLevel, getName };
};

const jimmie = Player("jim", 10);
const badGuy = Player("jeff", 5);
jimmie.attack(badGuy);
