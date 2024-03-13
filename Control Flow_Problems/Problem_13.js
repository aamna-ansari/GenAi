// Program to Check if the Numbers Have Same Last Digit
//  get num from user
let num1 = prompt("Enter number");
let num2 = prompt("Enter number");
let num3 = prompt("Enter number");

// find last digit

let result1 = num1 % 10;
let result2 = num2 % 10;
let result3 = num3 % 10;

// compare the last digits
if (result1 == result2 && result1 == result3) {
  console.log(`${num1}, ${num2} and ${num3} have the same last digit.`);
} else {
  console.log(`${num1}, ${num2} and ${num3} have different last digit.`);
}
