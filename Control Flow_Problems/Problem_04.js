// Program to Find the Largest Among Three Numbers

let num1 = prompt("Enter your number");
let num2 = prompt("Enter your number");
let num3 = prompt("Enter your number");

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is greater.`);
} else if (num2 < num1 && num2 < num3) {
  console.log(`${num2} is greater`);
} else {
  console.log(`${num3} is greater`);
}
