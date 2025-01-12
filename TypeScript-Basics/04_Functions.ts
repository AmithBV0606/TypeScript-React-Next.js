// Functions

let sayHi = () => {
  console.log("Hii, welcome!!");
};

// sayHi = "hi"

// Function with return type string :
let funcReturnString = (): string => {
  return "Hello world";
};

// Accepting the argument :
// let multiple = (num: number): number => {
//   return num * 2;
// };

let multiple = (num: number): number => {
  return num * 2;
};
multiple(5);

let sum = (a: number, b: number, c?: number) => {
  return a + b;
};
sum(10, 20);

// Passing object as an argument :
let ObjFunc = (user: { username: string; age: number }) => {
  console.log(user.username);
};
ObjFunc({ username: "Amith", age: 24 });