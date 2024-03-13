// Program to Find the Sum of Natural Numbers

let num = parseInt(prompt("Enter the Number"));
let sum = 0;

for (let i = 1; i < num; i++) {
  sum += i;
}
console.log(`The Sum of ${num} is ${sum}`);
