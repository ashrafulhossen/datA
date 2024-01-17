const country = "Bangladesh is my country";
console.log(country);

// ===========================
//       Explicit Types
// ===========================

// String
let name: string;
name = "ashraful";
console.log(name);

// Number
let age: number;
age = 32;
console.log(age);

// Boolean
let isTrueOrFalse: boolean;
isTrueOrFalse = true;
console.log(isTrueOrFalse);

// Array
let strArr: string[] = [];
strArr.push("hello", "string");
console.log(strArr);

let numArr: number[] = [];
numArr.push(21, 32, 62, 95);
console.log(numArr);

// ===========================
//        Union Types
// ===========================
let strOrNum: string | number = "this is string";
console.log(strOrNum);
strOrNum = 40;
console.log(strOrNum);

let strOrNumArr: (string | number)[] = [];
strOrNumArr.push("Apple", 2423, 34234, "Banana");
console.log(strOrNumArr);

let array: string[];
array = ["tea", "coffee", "juice"];
console.log(array);

// Object (object or array)
let obj: object = {};
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
let person: {
	name: string;
	age: number;
	profession: string;
	gender: string;
};

person = {
	name: "Ashraful",
	age: 20,
	profession: "web developer",
	gender: "male",
};
console.log(person);


// Function
let func: Function;

func = function () {
    console.log("Hello World");
};
func();


