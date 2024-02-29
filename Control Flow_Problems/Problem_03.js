// Javascript Program to Check if a Number is Odd or Even

// take input from the user
let num = prompt("Enter a number:");
//  logic condition
if (num % 2 == 0) {
  console.log(`${num} is even number`);
} else {
  console.log(`${num} is odd number`);
}

//  Using Ternary Operator

// take input from the user
let number = prompt("Enter a number: ");

// ternary operator
let result = number % 2 == 0 ? "even" : "odd";

console.log(`The ${number} is ${result}.`);
