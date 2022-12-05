///////////Factory function
// const Player = (name, level) => {
//    let health = level * 2;
//    const getLevel = () => level;
//    const getName = () => name;
//    const die = () => {
//       // uh oh
//    };
//    const damage = (x) => {
//       health -= x;
//       if (health <= 0) {
//          die();
//       }
//    };
//    const attack = (enemy) => {
//       if (level < enemy.getLevel()) {
//          damage(1);
//          console.log(`${enemy.getName()} has damaged ${name}`);
//       }
//       if (level >= enemy.getLevel()) {
//          enemy.damage(1);
//          console.log(`${name} has damaged ${enemy.getName()}`);
//       }
//    };
//    return { attack, damage, getLevel, getName };
// };

// const jimmie = Player("jim", 10);
// const badGuy = Player("jeff", 5);
// jimmie.attack(badGuy);
// jimmie.die();

//////////// IIFE sTYLE Function

// (function(){console.log("hi")}); shortest version of IIFE

// const Formatter = (function () {
//    const log = (msg) => console.log(msg);
//    const makeUppperCase = (text) => {
//       log("Something in here");
//       return text.toUpperCase();
//    };
// })();

// https://www.youtube.com/watch?v=HkFlM73G-hk&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=1
/////////// Modular Js video lessons

//#1 this is a simple module

// let myModule = {
//    name3: "Will",
//    age: 34,
//    sayName: function () {
//       alert(this.name3);
//    },
//    setName: function (newName3) {
//       this.name3 = newName3;
//    },
// };
// myModule.setName("smith");
// myModule.sayName();

// #2 this is [Module] Object Literal Pattern
// (function () {
//    let people = {
//       people: ["lkj", "hasid"],
//       init: function () {
//          this.cacheDom();
//          this.bindEvent();
//          this.render();
//       },
//       cacheDom: function () {
//          this.ul = document.querySelector(".ul");
//          this.input = document.querySelector(".form input");
//          this.addBtn = document.querySelector(".form button");
//       },
//       bindEvent: function () {
//          this.addBtn.addEventListener("click", this.addPerson.bind(this));
//       },
//       render: function () {
//          this.ul.innerText = "";
//          let data = {
//             people: this.people,
//          };
//          this.people.forEach((d) => {
//             let span = document.createElement("span");
//             let mark = document.createElement("mark");
//             mark.innerText = d;
//             span.append(mark);
//             let dt = document.createElement("data");
//             dt.innerText = "X";
//             dt.addEventListener("click", this.delPerson.bind(this));
//             span.append(dt);
//             this.ul.append(span);
//          });
//       },
//       addPerson: function () {
//          this.people.push(this.input.value);
//          this.render();
//          this.input.value = "";
//       },
//       delPerson: function (e) {
//          // e.target.parentElement.remove();
//          let i = this.people.indexOf(e.target.previousSibling.innerText);
//          this.people.splice(i, 1);
//          this.render();
//       },
//    };
//    people.init();
// })();

// #3 Module Revealing Pattern
// import { stats } from "./moduleStats.js";

// let people = (function () {
//    let people = ["lkj", "hid"];

//    //cache DOM
//    const ul = document.querySelector(".ul");
//    const input = document.querySelector(".form input");
//    const addBtn = document.querySelector(".form button");

//    render();
//    //bind events
//    addBtn.addEventListener("click", addPerson);

//    function render() {
//       ul.innerText = "";
//       people.forEach((d) => {
//          let span = document.createElement("span");
//          let mark = document.createElement("mark");
//          mark.innerText = d;
//          span.append(mark);
//          let dt = document.createElement("data");
//          dt.innerText = "X";
//          dt.addEventListener("click", delPerson);
//          span.append(dt);
//          ul.append(span);
//       });
//       stats.setPeople(people.length);
//    }

//    function addPerson(v) {
//       let name4 = typeof v === "string" ? v : input.value;
//       people.push(name4);
//       render();
//       input.value = "";
//    }

//    function delPerson(e) {
//       let i =
//          typeof e === "number"
//             ? e
//             : people.indexOf(e.target.previousSibling.innerText);
//       people.splice(i, 1);
//       // e.target.parentElement.remove();
//       render();
//    }
//    return { addPerson: addPerson, delPerson: delPerson };
// })();

///// #4-5 PUBSUB Module pattern

import { pubsub } from "./_pubsub.js";

export let managePeople = (function () {
   let people = ["lkj", "hid"];

   //cache DOM
   const ul = document.querySelector(".ul");
   const input = document.querySelector(".form input");
   const addBtn = document.querySelector(".form button");

   render();
   //bind events
   addBtn.addEventListener("click", addPerson);

   function render() {
      ul.innerText = "";
      people.forEach((d) => {
         let span = document.createElement("span");
         let mark = document.createElement("mark");
         mark.innerText = d;
         span.append(mark);
         let dt = document.createElement("data");
         dt.innerText = "X";
         dt.addEventListener("click", delPerson);
         span.append(dt);
         ul.append(span);
      });
      pubsub.emit("peopleChange", people);
   }

   function addPerson(v) {
      let name4 = typeof v === "string" ? v : input.value;
      people.push(name4);
      render();
      input.value = "";
   }

   function delPerson(e) {
      let i =
         typeof e === "number"
            ? e
            : people.indexOf(e.target.previousSibling.innerText);
      people.splice(i, 1);
      render();
   }
})();
