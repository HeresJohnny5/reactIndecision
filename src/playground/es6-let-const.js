// ***** ES5 Variables
// var nameVar = 'John Erickson';
// var nameVar = 'Lena Fellner'
// console.log('nameVar', nameVar);
// in ES5 you can both reassign and redefine values

// ***** ES6 let / const
// let nameLet = 'John Erickson';
// nameLet = 'Lena Fellner';
// console.log('nameLet', nameLet);
// ES6 'let' you can reasign, but you cannot redefine values

// ***** ES5 variables and ES6 let / const are function scoped
// function petName() {
//   var femaleCat = 'Nacho';
//   return femaleCat;
// }

// console.log(petName);
// ES5 'var' based variables and ES6 'let' / 'const' are function scoped meaning that each variable is specific to the function that it was created inside of and it cannot be accessed outside of said function

// ***** ES5 variables can be accessed outside of 'for' loops and 'if' statements
// var fullName = 'John Erickson';

// if (fullName) {
//   var firstName = fullName.split(' ');
// }

// console.log(firstName);
// this works b/c variable 'firstName' is in a 'if' statement and ES5 variables are function scoped

// *****
// const fullName = 'John Erickson';

// if (fullName) {
//   let firstName = fullName.split(' ');
// }

// console.log(firstName);
// this returns a ReferenceError: firstName is not defined b/c ES6 let / const are block