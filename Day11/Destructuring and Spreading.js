//Phá hủy là một cách để giải nén các mảng, và các đối tượng và gán cho một biến riêng biệt.
//Destructing Arrays
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree);
//We can use default value in case the value of array for that index is undefined:
const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  

//We can not assign variable to all the elements in the array.
// We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

//Destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}

//Destructuring Object
//When we destructure the name of the variable we use to destructure 
//should be exactly the same as the key or property of the object. See the example below.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter);

  //Object parameter without destructuring
  // Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect)) // 60


  const calculatePerimeter1 = ({ width, height }) => {
    return 2 * (width + height)
  }
  
  console.log(calculatePerimeter1(rect)) // 60
//Exercises: Level 1
  const constants = [2.72, 3.14, 9.81, 37, 100]
  const Countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
  const Rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
  ]

//1.Destructure and assign the elements of
// constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants;
console.log('e:',e,'pi:',pi,'gra:',gravity,'human:',humanBodyTemp,'Water:',waterBoilingTemp);
//2.Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin,est,sw,den,nor] = Countries;
console.log(fin,est,sw,den,nor);

//3.Destructure the rectangle object by its properties or keys.
const {width:w,height:h,area:a,perimeter:p} = Rectangle;
console.log('width:',w,'height:',h,'area:',a,'perimeter:',p);

//Exercises: Level 2
//Iterate through the users array and get all the keys of the object using destructuring

const copied = {...users};
console.log(copied);

//Find the persons who have less than two skills

const result = Object.values(users).filter(skill => skill.skills.length <= 2)
console.log(result);
//Exercises: Level 3
//1.Destructure the countries object print name, capital, population and languages of all countries
const Countries1 = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://restcountries.eu/data/ala.svg',
    currency: 'Euro'
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://restcountries.eu/data/alb.svg',
    currency: 'Albanian lek'
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    languages: ['Arabic'],
    population: 40400000,
    flag: 'https://restcountries.eu/data/dza.svg',
    currency: 'Algerian dinar'
  },];
for(const{name,capital,population,languages} of Countries1){
  console.log("Name:",name);
  console.log("Capital:",capital);
  console.log("Population:",population);
  console.log("Languages:",languages);
  
}
/*2.A junior developer structure student name, skills and score in array of 
arrays which may not easy to read. Destructure the following array name to name, 
skills array to skills, scores array to scores, 
JavaScript score to jsScore and React score to reactScore variable in one line. */
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const newStudent = [name, skills,[,,jsScore,reactScore]] = student;
  console.log(name, skills, jsScore, reactScore);
//3.Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
const convertArrayToObject = (arr)=>{
  const newArr = [];
  for(const [name,skills,score] of arr){
    newArr.push({name,skills,score})
  }
  return newArr;
}
console.log(convertArrayToObject(students))

/*4.Copy the student object to newStudent without mutating the original object. In the new object add the following ?
Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets */
const Student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}
let skillz = {
  bts: {skill: 'Bootstrap', level: 8}, 
  exp: {skill: 'Express', level: 9}, 
  sql: {skill: 'SQL', level: 8}, 
  ds : 'SQL'
} 



const copyPerson = {...Student}
const util = require('util')

copyPerson.skills.frontEnd.push(skillz.bts)
copyPerson.skills.backEnd.push(skillz.exp)
copyPerson.skills.dataBase.push(skillz.sql)
copyPerson.skills.dataScience.push(skillz.ds)
console.log(util.inspect(Student, false, null, true /* enable colors */))
