import {
   capitalize,
   reverseStr,
   add,
   subtract,
   caesarCipher,
   analyzeArray,
} from "./tests.js";

test("Capitalize First Letter.", () => {
   expect(capitalize("word")).toMatch(/Word/);
});

test("Reverse string letters order", () => {
   expect(reverseStr("word")).toMatch("drow");
});

test("Add two numbers.", () => {
   expect(add(2, 3)).toBe(5);
});

test("Subtract two numbers.", () => {
   expect(subtract(2, 3)).toBeLessThan(0);
});

test("Encrypt text", () => {
   expect(caesarCipher("tz,tING", 5)).toMatch(/.{7}/);
});

test("Return specific object.", () => {
   let obj = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
   };
   expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(obj);
});
