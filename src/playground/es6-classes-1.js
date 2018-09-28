class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello my name is ${this.name}.`;
  }

  getDescription() {
    return `My name is ${this.name}, I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!(this.major);
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      return `${description} My major is ${this.major}`;
    } else {
      return `${description} My major is Undeclared`;;
    }
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasLocation() {
    return !!(this.homeLocation);
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasLocation()) {
      return `${greeting} and I am from ${this.homeLocation}.`;
    } else {
      return `${greeting} and I am looking for a home.`;
    }
  }
}

// const me = new Student('John', 39);
// console.log(me.getDescription());

const me = new Traveler('John', 39, 'Pittsburgh');
console.log(me.getGreeting());