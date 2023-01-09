import { sum } from "./sum.js";

it("Addition of 2 elements", () => {
   expect(sum(1, 2)).toBe(3);
});

//XXXXXXXXXXXXXXXXXXXXX

// import sum from "./sum.js";

// it("Addition of 2 elements", () => {
//    expect(sum(1, 2)).toBe(3);
// });

//XXXXXXXXXXXXXXXXXXXX

// const sum = require('./sum');

// it("Addition of 2 elements", () => {
//    expect(sum(1, 2)).toBe(3);
// });

//XXXXXXXXXXXXXXXXXXXX

// import * as all from "./sum.js";

// it("Addition of 2 elements", () => {
//    expect(all.sum(1, 2)).toBe(3);
// });

//XXXXXXXXXXXXXXXXXXXX

// import {sum as s} from "./sum.js";

// it("Addition of 2 elements", () => {
//    expect(s(1, 2)).toBe(3);
// });
