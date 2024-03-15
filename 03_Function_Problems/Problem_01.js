// Program to Pass a Function as Parameter

function user(name, sayHelo) {
  console.log("Welcome " + name);
  sayHelo();
}

function sayHelo() {
  console.log("Good Morning");
}
user("ali", sayHelo);
