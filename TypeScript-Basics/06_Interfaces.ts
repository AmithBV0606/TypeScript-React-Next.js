// Interfaces : Advance version of type aliases

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "Amith",
  email: "amithrao0606@gmail.com",
  age: 24,
  employeeId: 1,
};

const client: IUser = {
  username: "Vikram",
  email: "Vikranthrao0606@gmail.com",
  age: 24,
};
