"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Starts from here!!!!
let guestList = ["Maaz", "Mahad", "Ali", "Saad"];
exports.guestList = guestList;
let dinnerInvite = "\n I would like to invite you to dinner at my place. \n ";
for (let a = 0; a < guestList.length; a++) {
    let guests = guestList[a];
    console.log("\n", " Hello, " + guests + " " + dinnerInvite);
}
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
let absentGuest = "Ali";
console.log("\t \t Mr " +
    absentGuest +
    " sends their regrets and won't be able to make it to dinner with us. \n");
guestList[guestList.indexOf(absentGuest)] = "Amaan";
let dinnerInvite2 = "\n I would like to invite you to dinner at my place.\n ";
for (let a = 0; a < guestList.length; a++) {
    let guests = guestList[a];
    console.log(" Hello, " + guests + " " + dinnerInvite2);
}
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let informingGuests = " \t \t Great news, everyone! I've managed to find a bigger table for our dinner party! \n";
console.log(informingGuests); //16
guestList.unshift("Zahid");
guestList.push("Hameed");
let middleIndex = Math.ceil(guestList.length / 2);
guestList.splice(middleIndex, 0, "Rafay");
for (let a = 0; a < guestList.length; a++) {
    let guests = guestList[a];
    console.log(" Hello, " + guests + " " + dinnerInvite2);
}
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("\t\tUnfortunately, the new dinner table won't arrive in time, and we can only invite two people.\n");
console.log("\n\tRemved Guests\n"); //17
while (guestList.length > 2) {
    let removedGuests = guestList.pop();
    console.log(" Sorry " + removedGuests + " We can't invite you to dinner party \n");
}
console.log("\n\tRemaining Guests\n");
for (let guests of guestList) {
    console.log(" Dear " + guests + " Your are still invited \n");
}
guestList.pop();
guestList.pop();
console.log("\n\tEmpty List of Guests\n");
console.log(guestList);
