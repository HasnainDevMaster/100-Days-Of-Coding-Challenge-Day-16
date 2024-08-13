// 100 Days Of Coding Challenge!

/** Question 48:
Combining Arrays with Spread Operator: Suppose you are comparing prices of two different sets of laptops.
Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.*/

//--------------------------------------------------------------------------------------------------------------------

// Define two arrays of laptop prices
const pricesSet1: number[] = [1200, 1500, 1000, 1800];
const pricesSet2: number[] = [1300, 1400, 1100, 1600];

// Combine the two arrays using the spread operator
const combinedPrices: number[] = [...pricesSet1, ...pricesSet2];

// Sort the combined array in ascending order
const sortedPrices: number[] = combinedPrices.sort((a, b) => a - b);

// Log the sorted array to the console
console.log(sortedPrices);
