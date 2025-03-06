"use strict";
//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let cartoon = "jerry";
let cartoon2 = "JERRY";
// Example 1: Equality (==)
console.log("\nTest 1: Is cartoon == 'jerry'? I predict true.");
console.log(cartoon == "jerry"); // Prediction: true
console.log("Is cartoon == 'tom'? I predict False.");
console.log(cartoon == "tom"); // pridiction: False
// Example 2: Inequality (!=)
console.log("\n\nTest 2: Is cartoon != to 'tom'? I predict True.");
console.log(cartoon != "tom"); // pridiction: True
console.log("Is cartoon != to 'jerry'? I predict False.");
console.log(cartoon != "jerry"); // pridiction: False
// Example 3: lower case function
console.log("\n\ntest 3: is cartoon is equal to 'jerry'? Using lowerCase I predict True.");
console.log(cartoon == cartoon.toLocaleLowerCase()); // prediction True
console.log("Is cartoon2 is equal to 'jerry'? Using lowerCase I predict False.");
console.log(cartoon2 == cartoon2.toLocaleLowerCase()); // prediction False
//  Numerical Examples
// Example 4.1: Equality (==)
console.log("\n\ntest 4.1: is 5 == 5 ? I predict True.");
console.log(5 == 5); // prediction True
// Example 4.2: Inequality (!=)
console.log("test 4.2: is 5 != 5 ? I predict False.");
console.log(5 != 5); // prediction False
// Example 4.3: Less Than (<)
console.log("\n\ntest 4.3: is 5 < 10 ? I predict True.");
console.log(5 < 10); // prediction True
console.log("Is 5 < 5 ? I predict False.");
console.log(5 < 5); // prediction False
// Example 4.4" Graeter Than (>)
console.log("\n\ntest 4.4: is 10 > 5 ? I predict True.");
console.log(10 > 5); // prediction True
console.log("Is 5 > 10 ? I predict False.");
console.log(5 > 10); // prediction False
// Example 4.5: Less Than Or equal (<=)
console.log("\n\ntest 4.5: is 5 <= 5 ? I predict True.");
console.log(5 <= 5); // prediction True
console.log("Is 5 <= 10 ? I predict False.");
console.log(5 <= 10); // prediction False
// Example 4.6" Graeter Than Or equal (>=)
console.log("\n\ntest 4.6: is 10 >= 10 ? I predict True.");
console.log(10 >= 10); // prediction True
console.log("Is 5 >= 10 ? I predict False.");
console.log(5 >= 10); // prediction False
let a = 10;
let b = 20;
// Example 5: And (&&)
console.log("\n\ntest 5: is a < 20 && b > 10 ? I predict True.");
console.log(a < 20 && b > 10); // Prediction True
console.log("Is a < 10 && b > 20 ? I predict False.");
console.log(a < 10 && b > 20); // Predicton False
//Example 5.1: Or (||)
console.log("\n\ntest 5.1: is a < 12 || b > 22 ? I predict True.");
console.log(a < 12 || b > 22); // Prediction True
console.log("Is a < 10 || b > 20 ? I predict False.");
console.log(a < 10 || b > 20); // Predicton False
// Example 6: Whether an item is in an Array
let buffet = ["biryani", "palao", "tikka", "malai boti", "chapati"];
console.log("\n\nBuffet items: " + buffet.join(", "));
console.log("\n\ntest 6: is buffet.includes('biryani')? I predict True");
console.log(buffet.includes("biryani")); // Prediction True
console.log("Is buffet.includes('mandi')? I predict False");
console.log(buffet.includes("mandi")); // Prediction False
// Example 7: Whether an item is not in an Array
console.log("\n\ntest 6: is !buffet.includes('gulab jaman')? I predict True");
console.log(!buffet.includes("gulab jaman")); // Prediction True
console.log("Is !buffet.includes('tikka')? I predict False");
console.log(!buffet.includes("tikka")); // Prediction False
