# Practice: Basic Class Syntax

This project is a part of the App Academy Open curriculum, where I learned about JavaScript classes and their usage. The goal of this project is to create a `Person` class with instance variables, instance methods, and static methods.

## Person Class

The `Person` class has the following features:

- **Instance Variables:**
  - `firstName`: First name of the person.
  - `lastName`: Last name of the person.
  - `age`: Age of the person.

- **Instance Method:**
  - `introduce()`: This method introduces the person by logging a string to the console, such as "Hi, I'm [firstName] [lastName], and I'm [age] years old."

- **Static Method:**
  - `introducePeople(people)`: This static method takes an array of `Person` instances as an argument. It checks if the input is a valid array and if all items in the array are instances of the `Person` class. If everything is valid, it calls the `introduce()` method on each person in the array.

## Usage

To use this project, you can follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `classes/person.js` file to view the implementation of the `Person` class.
3. Feel free to create instances of the `Person` class and utilize the provided methods.

## Acknowledgments

This project was completed as a part of the App Academy Open curriculum. Special thanks to the instructors and the App Academy team for providing valuable resources and guidance.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
