// Type Aliases

type userType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: userType) => {
  console.log(user.username);
};
betterFunc({ username: "Amith", age: 24 });

// Function signature :
type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + " times " + str);
};
write(20, "Amith");

// Types with specific options :
type userType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: userType2 = {
  username: "Amith",
  age: 25,
  // theme: "pink"
  theme: "light",
};