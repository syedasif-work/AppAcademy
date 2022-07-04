// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   bark() {
//     console.log("Bark");
//   }

//   static diet() {
//     return "carnivore";
//   }
// }

function Dog(name, age){
  this.name = name;
  this.age = age;
}

Dog.diet = function() {
  return "carnivore";
}

Dog.prototype.bark = function() { 
  console.log("Bark");
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

module.exports = Dog;