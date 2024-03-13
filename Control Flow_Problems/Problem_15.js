// program to find the LCM of two integers

let hcf;
// take input
let num1 = prompt("Enter a first positive integer: ");
let num2 = prompt("Enter a second positive integer: ");

// looping from 1 to number1 and number2 to find HCF
for (let i = 1; i <= num1 && i <= num2; i++) {
  // check if is factor of both integers
  if (num1 % i == 0 && num2 % i == 0) {
    hcf = i;
  }
}

// find LCM
let lcm = (num1 * num2) / hcf;

// display the hcf
console.log(`HCF of ${num1} and ${num2} is ${lcm}.`);
