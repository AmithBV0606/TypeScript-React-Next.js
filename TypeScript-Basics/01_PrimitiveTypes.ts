// Benifits of using TypeScript

// - Define a strict type
// - Use the same type throughout coding

let variable = "hello";

variable = "hii"; // Here we cannot give number

let age = 18;

// age = "five"; // Throws error

// PRIMITIVE TYPES : 

// Number types : 
let ageWithType: number = 22; // EXPLICITLY PROVIDING A TYPE

// ageWithType = "eighteen"; //Throws error
ageWithType = 18;

// String types : 
let testString: string = "It's a string!!";

// Boolean types : 
let testBoolean: boolean = false;

// Multiple types combined : Union types
let testStringOrNumber: string | number;
testStringOrNumber = "Amith";
testStringOrNumber = 30;
// testStringOrNumber = [];