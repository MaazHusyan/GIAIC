// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let myPlaces: string[] = ["Dubai", "Ejypy", "Germany", "China", "Finland"];

console.log("\n\tOriginal Order \n" + myPlaces.join(", ") + "\n");

console.log("\tAlphabetical Order \n" + [...myPlaces].sort().join(", ") + "\n");

console.log(
  "\tOriginal Order After Sorting Alphabetical Order \n" +
    myPlaces.join(", ") +
    "\n"
);

console.log(
  "\tReverse Alphabetical Order \n" +
    [...myPlaces].sort().reverse().join(", ") +
    "\n"
);

console.log(
  "\tOriginal Order After Reverse Alphabetical Sorting \n" +
    myPlaces.join(", ") +
    "\n"
);

myPlaces.reverse();
console.log("\tReversed Original Order\n" + myPlaces.join(", ") + "\n");

myPlaces.reverse();
console.log("\tReverse Back To Original Order\n" + myPlaces.join(", ") + "\n");

console.log(
  "\tAgain Sorted in Alphabetical Order\n" + myPlaces.sort().join(", ") + "\n"
);

console.log(
  "\tAgain Sorted in Reverse Alphabetical Order\n" +
    myPlaces.sort().reverse().join(", ")
);
