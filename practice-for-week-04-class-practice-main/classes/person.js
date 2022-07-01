// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(persons) {
    if (!Array.isArray(persons)){
      console.log("introducePeople only takes an array as an argument.")
      return ;
    }
    for (let person of persons) {
      if (!(person instanceof Person)) {
        console.log("All items in array must be Person class instances.");
        return;
      }
    }
    persons.forEach(person => {
      person.introduce();
    })
  }


}



try {
  module.exports = Person;
} catch {
  module.exports = null;
}