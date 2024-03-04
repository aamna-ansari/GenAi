// Print All Prime Numbers in an Interval
// input from user
let lowNum = parseInt(prompt("Enter your number"));
let highNum = parseInt(prompt("Enter your number"));

// check if num is greater than 1

for (let i = lowNum; i <= highNum; i++) {
  let flag = 0;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
