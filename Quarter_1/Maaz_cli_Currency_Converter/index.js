#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// hi
var currencies = {
    USD: 1, //Base Currency
    EUR: 0.94,
    INR: 83.44,
    KWD: 0.31,
    PKR: 277,
    SAR: 3.75
};
var user = await inquirer_1.default.prompt([
    {
        name: "from",
        message: "Enter currency:- From ",
        type: "list",
        choices: ["USD", "EUR", "INR", "KWD", "PKR", "SAR"]
    },
    {
        name: "to",
        message: "Enter currency:- To",
        type: "list",
        choices: ["USD", "EUR", "INR", "KWD", "PKR", "SAR"]
    },
    {
        name: "amount",
        message: "Select your Amount",
        type: "number"
    }
]);
var fromCurrency = currencies[user.from];
var toCurrency = currencies[user.to];
var userAmount = user.amount;
var baseAmount = userAmount / fromCurrency;
var convertedAmount = baseAmount * toCurrency;
console.log(Math.round(convertedAmount));
// console.log(convertedAmount);
