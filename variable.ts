type People = {
  name: string;
  age: number;
  salary: number;
};

const emp: People = {
  name: "mosuiur",
  age: 30,
  salary: 200,
};

function returnPeople(val: People): People {
  return val;
}

console.log(returnPeople(emp));
