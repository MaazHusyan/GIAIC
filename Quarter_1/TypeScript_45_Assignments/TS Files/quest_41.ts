// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

function showMagicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}
let magicians: string[] = ["Osman", "Ghufran", "Jibran", "Furqan"];
showMagicians(magicians);
