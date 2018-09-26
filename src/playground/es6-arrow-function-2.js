// Argument object - no longer bound with arrow functions
// ***** ES5 Function
// var sumES5 = function(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// console.log(sumES5(5, 4, 500));

// ***** ES6 Function arguments object will return a ReferenceError
// const sumES6 = (a, b) => {
//   console.log(arguments);
//   return a + b;
// }

// console.log(sumES6(5, 4, 500));

// The 'this' keyword - no longer bound with arrow functions

// ***** ES5 'this' keyword
var userES5 = {
  name: 'John',
  cities: ['Pittsburgh', 'Portland', 'Washington DC'],
  desiredCities: function() {
  	for(var i = 0; i < this.cities.length; i++) {
		  console.log(this.name + ' would like to live in ' + this.cities[i] + '.');
    }
  }
}

// console.log(userES5.desiredCities());

// ***** ES6 'this' keyword
var userES6 = {
  name: 'John',
  cities: ['Pittsburgh', 'Portland', 'Washington DC'],
  desiredCities: () => {
    console.log(this);
    this.cities.forEach(city => console.log(`${this.name} would like to live in ${city}.`));
  }
}

// console.log(userES6.desiredCities());

// this will log out 'undefined' b/c the arrow function doesn't bind its own 'this' value so it's no longer equal to the object

// ***** ES6 'this' keyword with ES6 method definition syntax

var userES6Method = {
  name: 'John',
  cities: ['Pittsburgh', 'Portland', 'Washington DC'],
  desiredCities() {
    console.log(this);
    this.cities.forEach(city => console.log(`${this.name} would like to live in ${city}.`));
  }
}

// console.log(userES6Method.desiredCities());

// Challenge
const multipler = {
  numbers: [2, 4, 6],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
}

const newNumbers = multipler.multiply();
console.log(newNumbers);

