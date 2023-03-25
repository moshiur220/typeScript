interface Greeting {
  message: string;
  name?: string;
}

function greet({ message, name = "stranger" }: Greeting): string {
  return `${message}, ${name}!`;
}

interface AddNumbers {
  (num1: number, num2: number): number;
}
// interface AddNumbers2 {
//   function(num1: number, num2: number): number;
// }

const addNumbers: AddNumbers = (num1, num2) => {
  return num1 + num2;
};

// object usr inter face function
interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

const calculator: Calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
};

console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 3)); // 2
