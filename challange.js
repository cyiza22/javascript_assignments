// Take the array below, double the values, filter out those less than 10, and sort them descending
function transformArray(arr) {
  return arr
    .map(x => x * 2)
    .filter(x => x >= 10)
    .sort((a, b) => b - a);
}
console.log(transformArray([2, 5, 8, 10, 3]));

//Chain string methods to take the input " learn-javascript ", trim it, convert to uppercase, and replace "-" with " "
let input = " learn-javascript ";
let output = input
  .trim()
  .toUpperCase()
  .replace("-", " ");
console.log(output);

// Take the array of tags below, remove empty strings, convert to lowercase, and reverse the order
const tags = ["js", "", "React", "NODE", "", "Express"];

let new_tag = tags
  .filter(t => t.trim() !== "")
  .map(t => t.toLowerCase())
  .reverse();

console.log(new_tag);

//Using chaining, filter products that have a price over $100, then get their names in uppercase

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Book", price: 30 },
  { name: "Phone", price: 800 },
  { name: "Pen", price: 2 }
];

let new_prodects = products
  .filter(p => p.price > 100)
  .map(p => p.name.toUpperCase());
console.log(new_prodects)

//Use method chaining to convert the following text into "Hello World"

function modify(messyText){
  return messyText
    .trim()
    .replace("_", " ")
    .replace(/\b\w/g, char => char.toUpperCase());
}

console.log(modify("hello_world"));

//From this list, return only the names of users with role "admin" and capitalize the names:
function getAdmin(){
  const users = [
  { name: "alice", role: "admin" },
  { name: "bob", role: "user" },
  { name: "charlie", role: "admin" }
];
  admins = users
    .filter(u => u.role === "admin")
    .map(u => u.name.charAt(0).toUpperCase() + u.name.slice(1));
  return admins;
}

console.log(getAdmin())

//Chain methods to extract words longer than 4 characters, capitalize them, and reverse the order:
function sentence(sentenceText) {
  return sentenceText
    .split(" ")
    .filter(word => word.length > 4)
    .map(word => word.toUpperCase())
    .reverse();
}

console.log(sentence("Method chaining makes codes cleaner and readable"));

//Use array methods to remove duplicates from the following list and sort it alphabetically
function unique(arr) {
  return [... new Set(arr)].sort();
}
console.log(unique(["JS", "React", "Node", "JS", "React"]));

//Using Object.entries() and map(), convert this object into an array of strings like "name: Alice"
const person = { name: "Alice", age: 30, city: "Kigali" };

let details = Object.entries(person)
  .map(([key, value]) => `${key}: ${value}`);
console.log(details);

//Take this array of prices, add 10% tax to each, round to 2 decimal places, and return the updated array
function addTax(prices) {
  return prices
    .map(price => +(price * 1.1).toFixed(2));
}
console.log(addTax([100, 59.99, 200, 20.5]));

//Use array methods to count how many even numbers are in this array
function countEvens(arr) {
  return arr
    .filter(num => num % 2 === 0)
    .length;
}
console.log(countEvens([1, 4, 6, 9, 10, 13, 14]));

//Convert the string "javascript-is-fun" into "Javascript Is Fun" using string built-in methods.
function formatString(str) {
  return str
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(formatString("javascript-is-fun"));

//Using map(), transform this list of users by adding a new property isActive: true without mutating the original array

const users = [
  { name: "John"},
  { name: "Jane"},
  { name: "Doe"}
];
let activeUsers = users
  .map(user => ({ ...user, isActive: true }));
console.log(activeUsers);

//Refactor the following code into a clean method chain
const arr = [1, 2, 3, 4, 5];
const doubled = arr.map(n => n * 2);
const even = doubled.filter(n => n % 2 === 0);
const total = even.reduce((sum, val) => sum + val, 0);
const result = arr
  .map(n => n * 2)
  .filter(n => n % 2 === 0)
  .reduce((sum, val) => sum + val, 0);
console.log(result);

//Write a reusable function formatNames that takes an array of names and returns a string
// of capitalized names, sorted alphabetically and joined with a comma. Use chaining.

function formatNames(names) {
  return names
    .map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
    .sort()
    .join(", ");
}
console.log(formatNames(["bob", "Alice", "david"]));