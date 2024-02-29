// Program to Solve Quadratic Equation

// The standard form of a quadratic equation is:ax2 + bx + c = 0, where
// a, b and c are real numbers and
// a ≠ 0

// To find the roots of such equation, we use the formula= (root1,root2) = (-b ± √b2-4ac)/2

let root1, root2;

let a = prompt("Enter the value of a");
let b = prompt("Enter the value of b");
let c = prompt("Enter the value of c");

let discriminant = b * b - 4 * a * c;
console.log(discriminant);

if (discriminant > 0) {
  root1 = -b + Math.sqrt(discriminant) / (2 * a);
  root2 = -b - Math.sqrt(discriminant) / (2 * a);
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
} else if (discriminant == 0) {
  root1 = -b / (2 * a);
  root2 = root1;
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
} else {
  let realPart = (-b / (2 * a)).toFixed(2);
  let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

  // result
  console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
