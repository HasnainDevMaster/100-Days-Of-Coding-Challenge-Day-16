// 100 Days Of Coding Challenge!

/** Question 47:
Array Destructuring: Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`,
use array destructuring to assign the first and second laptops to variables. Then, log these variables.
*/

//-------------------------------------------------------------------------------------------------------------------------------

const laptops = [
  { make: "Apple", model: "MacBook Pro", year: 2024 },
  { make: "Dell", model: "XPS 16", year: 2024 },
  { make: "HP", model: "Envy x360", year: 2024 },
  { make: "Lenovo", model: "ThinkPad X1", year: 2024 },
];

const [firstLaptop, secondLaptop] = laptops;

console.log(firstLaptop);
console.log(secondLaptop);
