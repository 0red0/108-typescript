// simple constructor example
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

// Prototype example
//https://stackoverflow.com/questions/9772307/declaring-javascript-object-method-in-constructor-function-vs-in-prototype/9772864#9772864
var Dog = function (name) {
   this.name = name;

   var barkCount = 0;

   this.bark = function () {
      barkCount++;
      alert(this.name + " bark");
   };

   this.getBarkCount = function () {
      alert(this.name + " has barked " + barkCount + " times");
   };
};

Dog.prototype.wagTail = function () {
   alert(this.name + " wagging tail");
};

var dog = new Dog("Dave");
dog.bark();
dog.bark();
dog.getBarkCount();
dog.wagTail();
