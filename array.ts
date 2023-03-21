// Declare variables for array
const arrNum: Array<number> = [];
const arrStr: string[] = [];
let stNumArray: Array<number | string> = [];
let stNumArray2: (number | string)[] = [];
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
let arrObj = [];

// arrObj.push({ name: "dfdf", salary: 1000 });

// output
arrNum.push(1, 2);
arrStr.push("name");
stNumArray.push(2, "sdf");
stNumArray2.push(2, "sd");

// array object
interface Person {
  name: string;
  age: number;
}

let people: Person[] = [];

let person1: Person = { name: "Alice", age: 30 };
let person2: Person = { name: "Bob", age: 40 };

people.push(person1);
people.push(person2);

people.push({ name: "Charlie", age: 50 });
