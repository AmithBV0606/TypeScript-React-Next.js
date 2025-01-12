// Objects

let user = {
  username: "Amith",
  age: 22,
  isAdmin: false,
};

user.username = "Rao";
// user.age = "Eighteen";
user.age = 90;

// We'll not be able to add something into an object, which is not already on that object
// user.phone = "123456";

// EXPLICITLY PROVIDING A TYPE
let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "Amith",
  age: 24,
  isAdmin: true,
  //   phone: "12345"
};

// Union types in Object :
let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "Amith",
  age: 24,
  isAdmin: true,
  phone: "12345",
};

// ANY TYPES ( BE CAREFUL )
let testAny: any;

testAny = 12;
testAny = "Hello";
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];

testAnyArray = [1, "two", false, []];