/*
Classes
JavaScript is an object oriented programming language. Everything in JavScript is an object,
 with its properties and methods. We create class to create an object.
 A Class is like an object constructor, or a "blueprint" for creating objects. 
 We instantiate a class to create an object. The class defines attributes and the behavior of the object,
  while the object, on the other hand, represents the class.

Once we create a class we can create object from it whenever we want. 
Creating an object from a class is called class instantiation.

In the object section, we saw how to create an object literal. Object literal is a singleton. 
If we want to get a similar object , we have to write it. However, class allows to create many objects.
 This helps to reduce amount of code and repetition of code.
*/

/*
Defining a classes
To define a class in JavaScript we need the keyword class , 
the name of a class in CamelCase and block code(two curly brackets). Let us create a class name Person
*/
// class Person {
//     // code goes here
//   }


//Class Instantiation(lớp khởi tạo)
/*Instantiation class means creating an object from a class. 
We need the keyword new and we call the name of the class after the word new.

Let us create a dog object from our Person class. */
class Person {
  // code goes here
}
const person = new Person()
console.log(person)

//Class Constructor(trình xây dựng lớp)
/*The constructor is a builtin function which allows as to create a blueprint for our object. 
The constructor function starts with a keyword constructor followed by a parenthesis. 
Inside the parenthesis we pass the properties of the object as parameter.
 We use the this keyword to attach the constructor parameters with the class. */
 class Person1 {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person1('dao','hai')

console.log(person1)

/*Class methods
The constructor inside a class is a builtin function which allow us to create a blueprint for the object.
In a class we can create class methods. 
Methods are JavaScript functions inside the class. Let us create some class methods. */

class Person2 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const Person3 = new Person2('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person2('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(Person3.getFullName())
console.log(person2.getFullName())

/*getter
The get method allow us to access value from the object.
 We write a get method using keyword get followed by a function.
 Instead of accessing properties directly from the object we use getter to get the value. */

console.log(Person3.getScore) // We do not need parenthesis to call a getter method
console.log(person2.getScore)

console.log(Person3.getSkills)
console.log(person2.getSkills)

/*setter
The setter method allow us to modify the value of certain properties. 
We write a setter method using keyword set followed by a function. See the example bellow. */
Person3.setScore = 1
Person3.setSkill = 'HTML'
Person3.setSkill = 'CSS'
Person3.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)

/*Static method
The static keyword defines a static method for a class. Static methods are not called on instances of the 
class. Instead, they are called on the class itself. These are often utility functions, 
such as functions to create or clone objects. 
An example of static method is Date.now(). The now method is called directly from the class. */


/*Inheritance
Using inheritance we can access all the properties and the methods of the parent class. 
This reduces repetition of code. If you remember, we have a
 Person parent class and we will create children from it. Our children class could be student, teach etc. */
 class Student extends Person {
  saySomething() {
    console.log('I am a child of the person class')
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())



/*Overriding methods
As you can see, we manage to access all the methods in the
 Person Class and we used it in the Student child class.
 We can customize the parent methods, we can add additional properties to a child class. 
 If we want to customize, the methods and if we want to add extra properties, we need to use 
 the constructor function the child class too. Inside the constructor function we call the super() 
 function to access all the properties from the parent class. The Person class didn't have gender
  but now let us give gender property for the child class, Student. If the same method name used in 
  the child class, the parent method will be overridden. */
