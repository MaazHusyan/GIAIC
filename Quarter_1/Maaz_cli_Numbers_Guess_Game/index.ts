#! /usr/bin/env node

import inquirer from "inquirer"; 

let randomNum:number = Math.floor(Math.random() * 5 + 1 )

const answers = await inquirer.prompt([{
    name:"userGuessedNum",
    type:"number",
    message:"Guess One Digit Number Between 1 to 6"
}]);

if(answers.userGuessedNum === randomNum){
    console.log("Congratulations\nYou Guessed the RIGHT Number");
}else{
    console.log("You Guessed the WRONG Number\nTry again !!");
    
}
