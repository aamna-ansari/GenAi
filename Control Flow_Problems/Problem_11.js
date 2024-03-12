//  Program to Make a Simple Calculator

let num1 = parseFloat(prompt("Enter Your number"));
let num2 = parseFloat(prompt("Enter your number"));

let result;
let operator = prompt("Enter Your Operator");
if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "/") {
  result = num1 / num2;
} else if (operator == "%") {
  result = num1 % num2;
} else {
  result = num1 * num2;
}

console.log(`${num1} ${operator} ${num2} is equal to ${result}`);
