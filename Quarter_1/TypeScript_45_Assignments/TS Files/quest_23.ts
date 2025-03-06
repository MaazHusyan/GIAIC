// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car: string = "subaru";
console.log("\nCar is equal to "+"' "+ car +" '\n");

// Example 1: Equality (==)
console.log("Test 1: Is car == 'subaru'? I predict true.");
console.log(car == 'subaru'); // Prediction: true

console.log("Is car == 'SUBARU'? I predict False.")
console.log(car == 'SUBARU'); // pridiction: False

// Example 2: Inequality (!=)
console.log("\n\nTest 2: Is car != to 'SUBARU'? I predict True.")
console.log(car != 'SUBARU'); // pridiction: True

console.log("Is car != to 'subaru'? I predict False.")
console.log(car != 'subaru'); // pridiction: False

// Example 3: Strict Equality (===)
console.log("\n\nTest 3: Is car === to 'subaru'? I predict True.");
console.log(car === "subaru"); // preduction True

console.log("Is car === to 'zubaru'? I predict False.")
console.log(car === "zubaru");

// Example 4: Strict Not Equality (!==)
console.log("\n\nTest 3: Is car !== to 'subaru'? I predict False.");
console.log(car !== "subaru"); // preduction False

console.log("Is car !== to 'zubaru'? I predict True.")
console.log(car !== "zubaru"); // prediction True

// Example 5: Less Than (<)
console.log("\n\nTest 5: Is car < to 'zubaru' I predict True.");
console.log(car < "zubaru"); //Prediction True

console.log("Is car < to 'subaru' I predict False.");
console.log(car < "subaru"); //Prediction False

// Example 6: Greater Than (>)
console.log("\n\nTest 6: Is car > to 'subaru' I predict False.");
console.log(car > "subaru"); //Prediction False

console.log("Is car > to 'rubaru' I predict True.");
console.log(car > "rubaru"); //Prediction True

// Example 7: Less Than or Equal (<=)
console.log("\n\nTest 7: Is car <= to 'rubaru' I predict False.");
console.log(car <= "rubaru"); //Prediction False

//Less Than or equal (<=)
console.log("Is car <= to 'subaru' I predict True.");
console.log(car <= "subaru"); //Prediction True 

// Example 8: Greater Than or Equal (>=)
console.log("\n\nTest 8: Is car >= to 'subaru' I predict True.");
console.log(car >= "subaru"); // prediction True

//Greater Than or equal (>=)
console.log("Is car >= to 'zubaru' I predict False.");
console.log(car >= "zubaru"); //Prediction False 

// Example 9: Checking Truthiness
console.log("\n\nTest 9: Is car? I predict True.");
console.log(car); // True

// Example 10: Checking Falsiness
console.log("\n\nTest 10: Is !car? I predict False.");
console.log(!car); // False





