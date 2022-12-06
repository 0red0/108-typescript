// Prototypal inheritance

let human = {
   species: "human",
   create: function (values) {
      let instance = Object.create(this);
      Object.keys(values).forEach((key) => {
         instance[key] = values[key];
      });
      return instance;
   },
   sayName: function () {
      console.log(this.name);
   },
};

let musician = human.create({
   species: "musician",
   playInstrument: function () {
      console.log("plays " + this.instrument);
   },
});
let will = musician.create({ name: "will", instrument: "guitar" });
