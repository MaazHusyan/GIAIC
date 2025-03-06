"use strict";
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
Object.defineProperty(exports, "__esModule", { value: true });
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let userNames = ["admin", "kashif", "zubair", "asad", "ali"];
for (let userName of userNames) {
    if (userName === "admin") {
        console.log("Hello admin, Would you like to see a status report?");
    }
    else {
        console.log("Hello " + userName + ", thank you for logging in again.");
    }
}
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
if (userNames.length == 0) {
    console.log("We need to find some users! ");
}
