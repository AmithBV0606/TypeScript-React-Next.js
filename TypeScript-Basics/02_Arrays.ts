// Arrays
let names = ["apple", "banana", "mellons"];

// names.push(5); // Throws error
names.push("Cherry");

let numbers = [11, 22, 33, 44];

// numbers.push(true);
numbers.push(69);

// Array types

let testStringArray: string[];
// testStringArray = ["one", "Two", 5];
testStringArray = ["one", "Two", "Three"];

let testNumberArray: number[];
// testNumberArray = [1,2,3,4,"Two"];
testNumberArray = [1, 2, 3, 4, 5];

// Union types in Arrays :

// let testStringOrNumberArray: string[] | number[];
let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [1, "two", 3];