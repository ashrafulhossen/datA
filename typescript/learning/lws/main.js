"use strict";
const country = "Bangladesh is my country";
console.log(country);
// ===========================
//       Explicit Types
// ===========================
// String
let name;
name = "ashraful";
console.log(name);
// Number
let age;
age = 32;
console.log(age);
// Boolean
let isTrueOrFalse;
isTrueOrFalse = true;
console.log(isTrueOrFalse);
// Array
let strArr = [];
strArr.push("hello", "string");
console.log(strArr);
let numArr = [];
numArr.push(21, 32, 62, 95);
console.log(numArr);
// ===========================
//        Union Types
// ===========================
let strOrNum = "this is string";
console.log(strOrNum);
strOrNum = 40;
console.log(strOrNum);
let strOrNumArr = [];
strOrNumArr.push("Apple", 2423, 34234, "Banana");
console.log(strOrNumArr);
let array;
array = ["tea", "coffee", "juice"];
console.log(array);
// Object (object or array)
let obj = {};
obj = {
    name: "object",
    type: "object",
    shortSyntax: "{}",
};
console.log(obj);
obj = {
    age: 32,
    country: "Bangladesh",
};
console.log(obj);
// Object (Schema Styled)
let person;
person = {
    name: "Ashraful",
    age: 20,
    profession: "web developer",
    gender: "male",
};
console.log(person);
// Function
let func;
func = function () {
    console.log("Hello World");
};
func();
