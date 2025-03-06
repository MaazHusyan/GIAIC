"use strict";
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
let Supra = {
    name: "Mark 4 Supra",
    topSpeed: 289,
    color: "White",
};
let M5 = {
    name: "BMW M5 ",
    topSpeed: 250,
    color: "Black",
};
let GTR = {
    name: "Nissan GT-R 35 ",
    topSpeed: 320,
    color: "Silver",
};
console.log("\t\t SOMETHING ABOUT CARS");
console.log("\nName: " +
    Supra.name +
    " Top Speed: " +
    Supra.topSpeed +
    " Color: " +
    Supra.color);
console.log(Supra);
console.log("\nName: " + M5.name + " Top Speed: " + M5.topSpeed + " Color: " + M5.color);
console.log(M5);
console.log("\nName: " + GTR.name + " Top Speed: " + GTR.topSpeed + " Color: " + GTR.color);
console.log(GTR);
