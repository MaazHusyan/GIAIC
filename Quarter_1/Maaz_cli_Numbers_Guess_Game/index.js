#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let randomNum = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer_1.default.prompt([{
        name: "userGuessedNum",
        type: "number",
        message: "Guess One Digit Number Between 1 to 6"
    }]);
if (answers.userGuessedNum === randomNum) {
    console.log("Congratulations\nYou Guessed the RIGHT Number");
}
else {
    console.log("You Guessed the WRONG Number\nTry again !!");
}
