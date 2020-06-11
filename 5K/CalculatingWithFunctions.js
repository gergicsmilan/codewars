/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

const number = (operation, num) => {
  return operation ? operation[0](num, operation[1]) : num;
};

const zero = (operation) => number(operation, 0);
const one = (operation) => number(operation, 1);
const two = (operation) => number(operation, 2);
const three = (operation) => number(operation, 3);
const four = (operation) => number(operation, 4);
const five = (operation) => number(operation, 5);
const six = (operation) => number(operation, 6);
const seven = (operation) => number(operation, 7);
const eight = (operation) => number(operation, 8);
const nine = (operation) => number(operation, 9);

const plus = (x) => [(a, b) => a + b, x];
const minus = (x) => [(a, b) => a - b, x];
const times = (x) => [(a, b) => a * b, x];
const dividedBy = (x) => [(a, b) => Math.floor(a / b), x];

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
