"use strict";
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let currentUsers = ["ali", "bilal", "chand", "dua", "esha"];
let newUsers = ["arshad", "bakar", "saad", "alisha", "DUA"];
for (let newUserName of newUsers) {
    let userNameExists = currentUsers.some((userName) => userName.toLowerCase() === newUserName.toLowerCase());
    if (userNameExists) {
        console.log("Sorry, the username " +
            newUserName +
            " is already taken. Please choose a different one.");
    }
    else {
        console.log("Congratulations! The username " + newUserName + " is available.");
    }
}
