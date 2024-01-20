//1 Create an empty object called dog

const Dog = {};

//2 Print the the dog object on the console

console.log(Dog);

//3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

const redDog = {
    name: "Big Pull",
    legs: 4,
    color: "red",
    age: 5,
    bark:[
        "gau gau"
    ],
    breed:"Good",
    getDogInfo: function(){
        return `this dog the name ${this.name} it live ${this.age} years old`;
    }
}
console.log(redDog);
//4 Get name, legs, color, age and bark value from the dog object
console.log(redDog.name);
console.log(redDog.legs);
console.log(redDog.color);
console.log(redDog.age);
console.log(redDog.bark);

//5 Set new properties the dog object: breed, getDogInfo
console.log(redDog.getDogInfo());

//6 Find the person who has many skills in the users object.

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  } 


  const result = Object.fromEntries([
    Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
  ]);
  console.log(result);

//7 Count logged in users, count users having greater than equal to 50 points from the following object.

const logged = Object.values(users).filter(user => user.isLoggedIn).length;
console.log('logged:',logged);
const greater = Object.values(users).filter(user => user.points >= 50).length;
console.log(greater);

//8 Find people who are MERN stack developer from the users object

const MERN = Object.entries(users).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name).join(", ");

console.log(MERN);

//9 Set your name in the users object without modifying the original users object

users[1] = "Dao hai";
console.log(users[1]);

//10 Get all keys or properties of users object 
const keys = Object.keys(users)
console.log(keys)
