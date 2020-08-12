let apples = 5; // apples can only ever be a number, due to type inference

apples = 'qwerty'; // error! a string != a number

let speed: string = 'fast'; // hard coding the type annotation

speed = 60; // error!

let hasName: boolean = true;

let nothingMuch: null = null; // type === value
let nothing: undefined = undefined; // type === value

// built in objects

let now: Date = new Date();

// Array

let colors: string[] = ['red', 'green', 'blue']; // string[] tells TS that our array will only contain strings
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, true];

// Classes

class Car {}
let thisCar: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
// in the type annotation we list each key of the object with its value type. This causes the object to require both that specific key, and the specific value.

const logNumber: (i: number) => void /* end annotation */ = (i: number) => {
  console.log(i);
};

/* when should we use type annotations?
 * 1. when a function returns the 'any' type
 * 2. when we declare a variable without initializing it with a value
 * 3. when we want a variable to have a type that can't be inferred (interfaces)
 */

// 1. a function returns the 'any' type

const json = '{"x": 10, "y": 20}';

const coordinates: { x: number; y: number } = JSON.parse(json); // JSON.parse returns the 'any' type
console.log(coordinates);

// 2. declare a variable without initializing it

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. a variable has a type that can't be inferred
/* this is a bad example, maybe don't ever do this */

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // if the an above 0 number exists, assign it. Else, this will be false and is by default.

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
