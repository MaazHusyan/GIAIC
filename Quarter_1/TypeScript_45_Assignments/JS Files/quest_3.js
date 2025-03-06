"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Muhammad Maaz";
// Convert to lowercase
let lowerCaseName = personName.toLowerCase();
console.log("Lowercase: " + lowerCaseName);
// Convert to uppercase
let upperCaseName = personName.toUpperCase();
console.log("Uppercase: " + upperCaseName);
// Convert to titlecase
let titleCaseName = personName.replace(/\b\w/g, (match) => match.toUpperCase());
console.log("Titlecase: " + titleCaseName);
