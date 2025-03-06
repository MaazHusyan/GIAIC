// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Muhammad Maaz";

// Convert to lowercase
let lowerCaseName: string = personName.toLowerCase();
console.log("Lowercase: " + lowerCaseName);

// Convert to uppercase
let upperCaseName: string = personName.toUpperCase();
console.log("Uppercase: " + upperCaseName);

// Convert to titlecase
let titleCaseName: string = personName.replace(/\b\w/g, (match) =>
  match.toUpperCase()
);
console.log("Titlecase: " + titleCaseName);
