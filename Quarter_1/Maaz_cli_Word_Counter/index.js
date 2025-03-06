#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let condition = true;
do {
    let answer = await inquirer_1.default.prompt([
        {
            name: "sentence",
            message: "Enter your para to count the words: => ",
            type: "input",
        },
    ]);
    let userSentence = answer.sentence;
    let countWords = userSentence.trim().split(/\s+/g).length;
    let countAlphabets = userSentence.match(/[aA-zZ]/g).length;
    console.log("Total words: " + countWords);
    console.log("Total alphabets: " + countAlphabets);
} while (condition);
