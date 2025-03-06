"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ["Osman", "Ghufran", "Jibran", "Furqan"];
showMagicians(magicians);
