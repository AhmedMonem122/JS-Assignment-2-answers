"use strict";

// 1-
const minMax = function (arr) {
  const newArray = [];
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  newArray.push(minValue);
  newArray.push(maxValue);

  return newArray;
};

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

console.log("#".repeat(20));

// 2-
const regex = /[0-9]+/g;

console.log(regex.test("c8"));
console.log(regex.test("23cc4"));
console.log(regex.test("abwekz"));
console.log(regex.test("sdfkxi"));

console.log("#".repeat(20));

// 3-
const arrayOfMultiples = function (num, length) {
  const newArray = [];

  for (let i = 0; i < length; i++) {
    newArray.push(num * (i + 1));
  }

  return newArray;
};

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));

console.log("#".repeat(20));

// 4-
const reverseWords = function (str) {
  return str
    .split(" ")
    .filter((word) => word !== "")
    .reverse()
    .join(" ");
};

console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello  world!  "));
console.log(reverseWords("a good example"));

console.log("#".repeat(20));

// 5-
const squareDigits = function (num) {
  const squaredString = `${num}`
    .split("")
    .map((number) => +number * number)
    .join("");

  return +squaredString;
};

console.log(squareDigits(9119));
console.log(squareDigits(2483));
console.log(squareDigits(3212));
