#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter your First Number", type: "number", name: "firstNum" },
  { message: "Enter your Second Number", type: "number", name: "secondNum" },
  {
    message: "Please Select Your Operator",
    type: "list",
    name: "operator",
    choices: ["Add", "Subtract", "Multiply", "Divide"],
  },
]);
// Conditional Statement
if (answer.operator === "Add") {
  console.log(answer.firstNum + answer.secondNum);
} else if (answer.operator === "Subtract") {
  console.log(answer.firstNum - answer.secondNum);
} else if (answer.operator === "Multiply") {
  console.log(answer.firstNum * answer.secondNum);
} else if (answer.operator === "Divide") {
  console.log(answer.firstNum / answer.secondNum);
} else {
  console.log("Invalid Operation");
}

