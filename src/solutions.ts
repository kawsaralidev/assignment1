// Problem 1 solution //

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

//Problem 2 solution //

function reverseString(str: string): string {
  const newStr = str.split("").reverse().join("");
  return newStr;
}

// Problem 3 solution //

type numOrStr = number | string;

const checkType = (input: numOrStr): string | number => {
  if (typeof input === "number") {
    return "Number";
  } else {
    return "String";
  }
};

// Problem 4 solution //

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};
const user = { id: 1, name: "John Doe", age: 21 };
const result = getProperty(user, "name");

// Problem 5 solution //

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

// Problem 6 solution //

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    const details = `Name: ${this.name}, Age:${this.age}, Grade: ${this.grade}`;
    return details;
  }
}
const student = new Student("Alice", 20, "A");

//Problem 7 solution //

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((item) => {
    if (arr2.includes(item)) {
      return true;
    } else {
      return false;
    }
  });
}
