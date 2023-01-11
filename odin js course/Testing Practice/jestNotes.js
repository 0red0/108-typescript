// function calx(num = 0) {
//    return num = null;
// }
// console.log(calx())

//-----------------

* expect.extend({
   // to create custom insertions or matchers;
   // it has specific syntax look it up
})
toBe.(expect.anything()) => return everything but null or undefined;
toBe.(expect.any(constructor)) = types of data(Number) - (string) - (object);
toEqual.(expect.arrayContaining(1, 2 or[1, 2]))

//-----------------

let str = '.abc';
let regTest = !!str.match(/^[.,?!:]/); // true
return regTest;

//-----------------

Pure Functions; useful for better quality code.
// - return same result.
// - don't produce observable side effects:
//    . relay on external variables
//    . make requests
//    . print to screen or console
//    . manipulate dom
//    . Math.random (builtin method)
//    . Get time

//-----------------

Mocking in jest;

AKA: [Test doubles, dummies, spies]
= Functions with preset outputs instead of requests or dom calls to run the test momentarily.

//-----------------

SOLID Princibles;

= Single responsibility prin

   -\ classes & functions responsibilities to the minmum make them more reusable

= Open / closed prin

   -\ classes are open to extension and closed to change

= Liskov's substitution prin

   -\ Anywhere u use a class u can use its subClasses or derived from it.

= Interface segregation prin

   -\ Interfaces shouldn't be extended to cover unnecessary usage that makes it 
      bigger but creating new interfaces to handle the new classes.

= Dependency inversion prin 

   -\ invert responsibilities over from one complicated fn to smaller independent interfaces
      or apply user choices if possible. 