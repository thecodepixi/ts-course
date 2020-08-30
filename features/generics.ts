class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// simplify and satisfy both use cases by using generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// now ArrayOfAnything can contain an array of any single type of data, by using the T generic
// T serves as a variable for any data type, which we can then pass the type to when instantiating:

let arrayOfNums = new ArrayOfAnything<number>([1, 2, 3, 4]);

let arrayOfStrings = new ArrayOfAnything<string>(['a', 'b', 'c']);

arrayOfStrings.get(1); // 'b'
arrayOfNums.get(1); // 2

// type inference works with generics too!

let anotherArrOfStrings = new ArrayOfAnything(['d', 'e', 'f']);
// TS knows that anotherArrayOfStrings is of type string[]

/* EXAMPLE OF GENERICS WITH FUNCTIONS */
function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// same concept: can simplify with generics
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);
printAnything<number>([1, 2, 3, 4]);

//can also use inference here, but specifying type is always better/safer

/* GENERIC CONSTRAINTS */

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

// we extend printable with our generic as a constraint to promise to TS that whatever type we will pass to this function will have a print() function available. And TS can get mad at us if what we pass to the function does not satisfy the interface.
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
// these will work
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House | Car>([new House(), new Car()]);
// these will produce errors because they are not Printable
printHousesOrCars<number>([1, 2, 3]);
printHousesOrCars<string>(['a', 'b', 'c']);
