"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
let magicians = ["Osman", "Ghufran", "Jibran", "Furqan"];
console.log("Original Magicians:");
showMagicians(magicians);
console.log();
makeGreat(magicians);
console.log("Great Magicians:");
showMagicians(magicians);
