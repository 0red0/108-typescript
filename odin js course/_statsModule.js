// #3.5 Linking revealed modules

// export let stats = (function () {
//    let people = 0;
//    const stats = document.querySelector(".stats");
//    render();
//    function render() {
//       stats.innerText = `Stats/ ${people} Persons.`;
//    }
//    function setPeople(newPeople) {
//       people = newPeople;
//       render();
//    }
//    return { setPeople };
// })();

// #4 ///// with pubsub

import { pubsub } from "./_pubsub.js";

export let stats = (function () {
   let people = 0;
   const stats = document.querySelector(".stats");
   pubsub.on("peopleChange", setPeople);
   render();
   function render() {
      stats.innerText = `Stats/ ${people} Persons.`;
   }
   function setPeople(newPeople) {
      people = newPeople.length;
      render();
   }
})();
