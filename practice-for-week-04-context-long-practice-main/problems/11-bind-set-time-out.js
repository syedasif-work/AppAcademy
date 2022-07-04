function boundFuncTimer(obj, func, delay) {
  // Your code here
  setTimeout(func.bind(obj), delay);
}

class Animal {
  constructor(age) {
    this.age = age;
  }

  growOlder() {
    this.age++;
    console.log(this.age);
  }
}

const dog = new Animal(1);
const cat = new Animal(5);

boundFuncTimer(dog, dog.growOlder, 5000); // in 5 seconds prints: 2
boundFuncTimer(cat, dog.growOlder, 7000); // in 7 seconds prints: 6

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;