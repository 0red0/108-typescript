// import LinkedList from "./LinkedList.js"; [worse in referencing errors]
const LinkedList = require("./LinkedList.js");

const ll = LinkedList.fromValues(10, 20, 30, 40);

ll.print();
// console.log(ll.getByIndex(0).value);

// ll.insertAtIndex(2, 60);

ll.removeHead();

ll.print();
