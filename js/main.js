// Variables

let userName = prompt("Enter your name:");
let userSurname = prompt("Enter your surname:");

let userNumberOne = parseInt(prompt("Enter your first number:"));
let userNumberTwo = parseInt(prompt("Enter your second number:"));

let userNumberRes = userNumberOne / userNumberTwo;

let userPassword = userName + userSurname + userNumberRes

console.log(` User data:

${userName}
${userSurname}
${userNumberRes}
${userPassword}

`);