#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
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
}
else if (answer.operator === "Subtract") {
    console.log(answer.firstNum - answer.secondNum);
}
else if (answer.operator === "Multiply") {
    console.log(answer.firstNum * answer.secondNum);
}
else if (answer.operator === "Divide") {
    console.log(answer.firstNum / answer.secondNum);
}
else {
    console.log("Invalid Operation");
}
