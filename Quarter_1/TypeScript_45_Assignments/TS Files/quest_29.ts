// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

let favoriteFruits: string[] = ["Mango", "Banana", "Cherry"];

if (favoriteFruits.includes("Mango")) {
  console.log("I really like Mango");
} else {
  console.log("I don't like Mango");
}

if (favoriteFruits.includes("Banana")) {
  console.log("I really like Banana");
} else {
  console.log("I don't like Banana");
}

if (favoriteFruits.includes("Cherry")) {
  console.log("I really like Cherry");
} else {
  console.log("I don't like Cherry");
}

if (favoriteFruits.includes("Melon")) {
  console.log("I really like Melon");
} else {
  console.log("I don't like Melon");
}

if (favoriteFruits.includes("Apple")) {
  console.log("I really like Apple");
} else {
  console.log("I don't like Apple");
}
