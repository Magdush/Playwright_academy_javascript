// arrays_learning.js
// javascript/arrays

const cities = ["New York", "Los Angeles", "Chicago", "Houston"];
console.log(cities);
console.log("Druhé město: " + cities[1]);
cities.push("Ostrava");
console.log(cities);
for (let i = 0; i < cities.length; i++) {
  console.log("Město: " + cities[i]);
}
