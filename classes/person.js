class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  };

  introduce() {
    // "Hi, I'm <firstName> <lastName>, and I'm <age> years old.".
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  };

  static checkIfPerson(people) {
    for (const person of people) {
      if (!(person instanceof Person)) {
        return false;
      }
    }

    return true
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      throw new Error("introducePeople only takes an array as an argument.");
    }

    if (!(Person.checkIfPerson(people))) {
      throw new Error("All items in array must be Person class instances.");
    }

    for (const person of people) {
      person.introduce();
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
