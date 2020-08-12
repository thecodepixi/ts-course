// no type inference on arguments, we must annotate their types.
// inference on return values! annotating the return value is optional
// but you should always add them to avoid bugs
const add = (a: number, b: number) => {
  return a + b;
};

// this func has no return value! inferred return value is void!
const subtract = (a: number, b: number) => {
  a - b;
};

// more function declaration examples

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void return value, meaning nothing is returned from this function

const logger = (message: string): void => {
  console.log(message);
};

// error, this function never finishes running because an error is throw
// so we use "never" to indicate it will never complete
const throwError = (message: string): never => {
  throw new Error(message);
};

// Object destructuring

const currentWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date.toDateString());
  console.log(weather);
};

logWeather(currentWeather);
