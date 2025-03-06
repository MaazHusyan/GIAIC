// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

function cityCountry(city: string, country: string): string {
  return '"' + city + ", " + country + '"';
}
let name1 = cityCountry("Mumbai", "India");
let name2 = cityCountry("Lahore", "Pakistan");
let name3 = cityCountry("Tokyo", "Japan");

console.log(name1);
console.log(name2);
console.log(name3);
