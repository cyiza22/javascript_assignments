import { add, toUpper, reverse } from "./utils/index.js";

console.log(add(5, 10));
console.log(reverse(toUpper("hello")));

// for search.js testing

import { searchById, searchByName, filterByAge } from "./search.js";

console.log(`Search ID 1:`, searchById(1));
console.log(`Search ID 10:`, searchById(10));

console.log(`Search Name joLiVeT:`, searchByName("joLiVeT"));
console.log(`Search Name unknown:`, searchByName("xxxx"));

console.log(`Students aged 21 and above:`, filterByAge(21));

