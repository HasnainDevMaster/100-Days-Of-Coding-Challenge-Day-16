// 100 Days Of Coding Challenge!

/** Question 46:
Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe().
that logs a sentence about the laptop.*/

//------------------------------------------------------------------------------------------------------------------------

// Define the Laptop interface to specify the structure of the laptop object
interface Laptop {
  make: string;
  model: string;
  year: number;
  describe(): void;
}

// Implement the Laptop interface in a class
class MyLaptop implements Laptop {
  make: string;
  model: string;
  year: number;

  // Constructor to initialize the properties
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to log a sentence about the laptop
  describe(): void {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  }
}

// Create an instance of the MyLaptop class
const myLaptop = new MyLaptop("Dell", "XPS 16", 2024);

// Call the describe method to log the sentence
myLaptop.describe();
