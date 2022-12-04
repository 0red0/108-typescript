export let pubsub = {
   events: {},
   on: function (eventName, fn) {
      this.events[eventName] = this.events[eventName] || [eventName];
      this.events[eventName].push(fn);
      console.log(fn);
   },
   off: function (eventName, fn) {
      if (this.events[eventName]) {
         for (let i = 0; i < this.events[eventName].length; i++) {
            this.events[eventName][i].splice(i, 1);
            break;
         }
      }
   },
   emit: function (eventName, data) {
      if (this.events[eventName]) {
         this.events[eventName].forEach(function (fn) {
            fn(data);
         });
      }
   },
};
