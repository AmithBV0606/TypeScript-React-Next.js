// Generics

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

// This is not the optimal way!!

// Doing same thing using Generics :
interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

// Usage :
const testMe: IPostBetter<String> = {
  id: 1,
  title: "Post-1",
  desc: "This is my first post!",
  extra: ["a", "b"],
};

// Another interface with Generics :
interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

// Usage :
const testMe2: IPostEvenBetter<{ id: number; username: string }> = {
  id: 1,
  title: "Post-1",
  desc: "This is my first post!",
  extra: [{ id: 21, username: "amithrao01" }],
};

const testMe3: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "Post-1",
  desc: "This is my first post!",
  extra: [{ id: 21, title: "Men's Wear" }],
};