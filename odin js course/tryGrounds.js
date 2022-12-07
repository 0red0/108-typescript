// Setters

class Human {
   static species = "Homo sapiens";
   static speciesSentence() {
      return `Humans are classified as ${this.species}`;
   }
   constructor(firstName, lastName) {
      let privateVar = "private message";
      this.firstName = firstName;
      this.lastName = lastName;
   }
   get fullName() {
      // invoke method like a property
      return `${this.firstName} ${this.lastName}`;
   }
   setfirstName(firstName) {
      return (this.firstName = firstName);
   }
   setlastName(lastName) {
      return (this.lastName = lastName);
   }
   setFullName(name) {
      name = name.split(" ");
      this.setfirstName(name[0]);
      this.setlastName(name[1]);
   }
}
const person = new Human("Samir", "Jackovic"); // instance of Human
console.log(Human.speciesSentence());
console.log(person.fullName);
