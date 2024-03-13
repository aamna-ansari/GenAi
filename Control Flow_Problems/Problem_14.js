// Find HCF

let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
let hcf;

// Find the smaller number
let minNumber = Math.min(num1, num2);

// Loop 
for (let i = 1; i <= minNumber; i++) {
  // Check if both numbers are divisible by the current iteration
  if (num1 % i === 0 && num2 % i === 0) {
    hcf = i; 
  }
}

console.log(`The HCF of ${num1} and ${num2} is ${hcf}`);
