"use strict";
// 100 Days Of Coding Challenge!
// Implement the Laptop interface in a class
class MyLaptop {
    // Constructor to initialize the properties
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to log a sentence about the laptop
    describe() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
}
// Create an instance of the MyLaptop class
const myLaptop = new MyLaptop("Dell", "XPS 16", 2024);
// Call the describe method to log the sentence
myLaptop.describe();
