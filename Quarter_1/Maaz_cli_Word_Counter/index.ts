#!/usr/bin/env node
import inquirer from "inquirer";
let condition: boolean = true;

do {
  let answer = await inquirer.prompt([
    {
      name: "sentence",
      message: "Enter your para to count the words: => ",
      type: "input",
    },
  ]);
  let userSentence = answer.sentence
  
  let countWords = userSentence.trim().split(/\s+/g).length;
  let countAlphabets = userSentence.match(/[aA-zZ]/g).length;
  console.log("Total words: "+countWords);
  console.log("Total alphabets: "+countAlphabets);
} while (condition);
