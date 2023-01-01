// https://www.youtube.com/watch?v=ZBdE8DElQQU&list=WL&index=5&t=293s
// minimal linked list example [1]

const n1 = {
   date: 100,
};

const n2 = {
   data: 200,
};

n1.next = n2;

console.log(n1);

// example [2]

class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

const n1 = new Node(100);
console.log(n1);

// example [2.1]

class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.size = 0;
   }
   //Insert first node
   insertFirst(data) {
      this.head = new Node(data, this.head); //this is instantiating the first class ((Node))
   }
}
const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200); //it pushed {100 node} over to 2nd place
console.log(ll);

// complete linkedList
class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.size = 0;
   }
   //Insert first node
   insertFirst(data) {
      this.head = new Node(data, this.head); //this is instantiating the first class ((Node))
      this.size++;
   }

   //Insert last node
   insertLast(data) {
      let node = new Node(data);
      let current;
      //check if there is a head node
      if (!this.head) {
         this.head = node;
      } else {
         current = this.head;

         while (current.next) {
            current = current.next;
         }
         current.next = node;
      }
      this.size++;
   }

   //Insert at index
   insertAt(data, index) {
      if (index > 0 && index > this.size) return; //index out of range
      // insert first case
      if (index === 0) {
         this.insertFirst(data);
         return;
      }
      const node = new Node(data);
      let current, previous;
      current = this.head;

      let count = 0;
      while (count < index) {
         previous = current;
         count++;
         current = current.next;
      }
      node.next = current;
      previous.next = node;
      this.size++;
   }

   //Get at index
   getAt(index) {
      let current = this.head;
      let count = 0;

      while (current) {
         if (count == index) {
            console.log(current.data);
         }
         count++;
         current = current.next;
      }
      // for(let i=0; i< index;i++){ current = current.next}return current

      return null;
   }

   //Remove at index
   removeAt(index) {
      if (index > 0 && index > this.size) {
         return;
      }
      let current = this.head;
      let previous;
      let count = 0;

      if (index === 0) {
         this.head = current.next;
      } else {
         while (count < index) {
            count++;
            previous = current;
            current = current.next;
         }
         previous.next = current.next;
      }
      this.size--;
   }

   //Clear list
   clearList() {
      this.head = null;
      this.size = 0;
   }

   //Print list data
   printListData() {
      let current = this.head;

      while (current) {
         console.log(current.data);
         current = current.next;
      }
   }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
// ll.insertAt(500, 1);
ll.removeAt(3);
// ll.clearList();

ll.printListData();
// ll.getAt(1);
