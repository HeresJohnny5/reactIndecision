// ***** ES5 Function
var square = function(x) {
  return x * x;
};

// console.log(square(8));

// ***** ES6 Arrow Function with explicit returns
const squareES6 = x => x * x;

// console.log(squareES6(8));

// ***** ES6 Arrow Functions with implicit returns
const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('John Erickson'));