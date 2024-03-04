//  Find the Factorial of a Number
let num = parseInt(prompt("Enter a number:"));

// checking if number is negative

if (num < 0) {
  console.log("Error! Factorial for negative number does not exist.");
}

// if number is 0
else if (num === 0) {
  console.log(`The factorial of ${num} is 1.`);
} else {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(`the factorial of ${num}! is equal to ${fact}`);
}
