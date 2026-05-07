// Problem 1 solution //

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//Problem 2 solution //

function reverseString(str: string): string {
  const newStr = str.split("").reverse().join("");
  return newStr;
}

// console.log(reverseString("typescript"));

// Problem 3 solution //

type numOrStr = number | string;

const checkType = (input: numOrStr): string | number => {
  if (typeof input === "number") {
    return "Number";
  } else {
    return "String";
  }
};

// console.log(checkType("Hello"));
// console.log(checkType(42));

// Problem 4 solution //

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};
const user = { id: 1, name: "John Doe", age: 21 };
const result = getProperty(user, "name");
// console.log(result);

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
// console.log(toggleReadStatus(myBook));

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

// console.log(student.getDetails());

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

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
