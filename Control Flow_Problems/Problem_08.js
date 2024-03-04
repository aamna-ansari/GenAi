// Display the Multiplication TableDisplay the Multiplication Table

let num = parseInt(prompt("Enter a number:"));

let TableDisplay = 1;

for (let i = 1; i <= 10; i++) {
  TableDisplay = num * i;
  console.log(`${num} * ${i} = ${TableDisplay}`);
}
