let userName = prompt("What's your name: ");
console.log(`Your name is ${userName}`);
if (userName === "Eric") {
  console.log(true);
} else {
  console.log(false);
}
function greet() {
  let x = parseInt(prompt("Enter x value: "));
  let y = parseInt(prompt("Enter y value: "));
  return x + y;
}
