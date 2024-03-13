// Program to Find the Factors of a Number
let num = prompt("Enter the number:");
console.log(`The factors of ${num} is:`);
for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}
