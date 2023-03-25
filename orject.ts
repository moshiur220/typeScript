// object type example
/*
let employee: {
  name: String;
  age: Number;
  salary: Number;
};

employee = {
  name: "moshiur",
  age: 20,
  salary: 20,
};
type Address = {
  street: string;
  city: string;
  state: string;
};
type People = {
  name: String;
  age: Number;
  salary: Number;
  address: Address[];
};

let emp: People = {
  name: "moshiur",
  age: 20,
  salary: 20,
  address: [
    {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
    },
  ],
};
*/
// Object and interface
interface Address {
  street: string;
  city: string;
  state: string;
}
interface Employee {
  firstName: String;
  lastName: String;
  age: Number;
  address: Address[];
}

let person: Employee = {
  firstName: "moshiur",
  age: 20,
  lastName: "moshiur",
  address: [
    {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
    },
  ],
};
