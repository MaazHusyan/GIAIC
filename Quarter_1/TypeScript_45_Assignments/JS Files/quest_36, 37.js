"use strict";
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size, massege) {
    console.log("You've ordered a " + size + " size shirt with the message:" + massege);
}
makeShirt("Large", "I like Typescript");
console.log("\n\t\tThis is Quest 37\n");
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function makeTshirt(size = "large", message = "I like typescript") {
    console.log("You've ordered a " + size + " size shirt with the message:" + message);
}
makeTshirt("small", "Keep Coding");
makeTshirt();
makeTshirt("medium");
