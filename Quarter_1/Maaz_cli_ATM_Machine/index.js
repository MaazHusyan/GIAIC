#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 100000;
let myPin = 1234;
console.log(`Pin Code is 1234`);
let selectPin = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (selectPin.pin === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "Select your operation",
            type: "list",
            choices: ["Fast Cash", "Withdraw", "Balance Check"],
        },
    ]);
    if (operationAns.operation === "Fast Cash") {
        let operationFastCash = await inquirer_1.default.prompt([
            {
                name: "fastCash",
                message: "Select your Amount",
                type: "list",
                choices: [500, 1000, 5000, 10000],
            },
        ]);
        if (operationFastCash.fastCash === 500) {
            myBalance -= operationFastCash.fastCash;
            console.log(`Your Current Balance in $${myBalance}`);
        }
        else if (operationFastCash.fastCash === 1000) {
            myBalance -= operationFastCash.fastCash;
            console.log(`Your Current Balance in $${myBalance}`);
        }
        else if (operationFastCash.fastCash === 5000) {
            myBalance -= operationFastCash.fastCash;
            console.log(`Your Current Balance in $${myBalance}`);
        }
        else if (operationFastCash.fastCash === 10000) {
            myBalance -= operationFastCash.fastCash;
            console.log(`Your Current Balance in $${myBalance}`);
        }
    }
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "Select your Amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining Balance is $${myBalance} `);
        }
        else {
            console.log("Not enough money");
        }
    }
    else if (operationAns.operation === "Balance Check") {
        console.log(`Your Current Balance is $${myBalance} `);
    }
}
else {
    console.log("Incorrect pin code");
}
