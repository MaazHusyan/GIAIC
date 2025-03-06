// 25

// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)

let alienColor1: string = "green"; // #1

if (alienColor1 === "green") {
  console.log("the player just earned 5 points");
} // Passing Test

alienColor1 = "yellow";

if (alienColor1 === "green") {
  console.log("the player just earned 5 points");
} // Failing Test

// 26

// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let alienColor2: string = "green"; // #2

if (alienColor2 === "green") {
  console.log("the player just earned 5 points for shooting the alien");
} else {
  console.log("the player just earned 10 points");
} // if block

alienColor2 = "yellow";

if (alienColor2 === "green") {
  console.log("the player just earned 5 points for shooting the alien");
} else {
  console.log("the player just earned 10 points");
} // else block

// 27

// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor3: string = "green"; // #3

if (alienColor3 === "green") {
  console.log("the player earned 5 points");
} else if (alienColor3 === "yellow") {
  console.log("the player earned 10 points");
} else if (alienColor3 === "red") {
  console.log("the player earned 15 points");
} // if else chain

alienColor3 = "yellow";

if (alienColor3 === "green") {
  console.log("the player earned 5 points");
} else if (alienColor3 === "yellow") {
  console.log("the player earned 10 points");
} else if (alienColor3 === "red") {
  console.log("the player earned 15 points");
} // if else chain

alienColor3 = "red";

if (alienColor3 === "green") {
  console.log("the player earned 5 points");
} else if (alienColor3 === "yellow") {
  console.log("the player earned 10 points");
} else if (alienColor3 === "red") {
  console.log("the player earned 15 points");
} // if else chain
