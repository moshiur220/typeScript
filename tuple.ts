// A tuple works like an array with some additional considerations:

// The number of elements in the tuple is fixed.
// The types of elements are known, and need not be the same.

let skill: [string, number];
skill = ["Programming", 5];

let color: [number, number, number] = [255, 0, 0];

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
