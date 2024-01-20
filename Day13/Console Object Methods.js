/*console.log()
We use console.log() to show output on the browser console.
 We can substitute values and also we can style the logging out put using %c. */
 console.log('30 Days of JavaScript');

 /*console.warn()
We use console.warn() to give warning on browser. 
For instance to inform or warn deprecation of version of a package 
or bad practices. Copy the following code and paste it on browser console to see warning messages. */
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

/*console.error()
The console.error() method shows an error messages. */
console.error('This is an error message')
console.error('We all make mistakes')
/*console.table()
The console.table() method display data as a table on the console.
 Displays tabular data as a table. The console.table() takes one required argument data, 
 which must be an array or an object, 
and one additional optional parameter columns. */
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

/*console.time()
Starts a timer you can use to track how long an operation takes. 
You give each timer a unique name, and may have up to 10,000 timers running on a given page.
 When you call console.timeEnd() with the same name, the browser will output the time,
 in milliseconds, that elapsed since the timer was started. */
 const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')

/*console.info()
It displays information message on browser console. */
console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')
/*console.assert()
The console.assert() methods writes an error message to the console if the assertion is false. 
If the assertion is true, nothing happens. The first parameter is an assertion expression. 
If this expression is false, an Assertion failed error message will be displayed. */
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

/*console.group()
The console.group() can help to group different log groups. 
Copy the following code and paste it on browser console to the groups. */
const Names = ['Asabeneh', 'Brook', 'David', 'John']
const Countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(Names)
console.groupEnd()

console.group('Countries')
console.log(Countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()
/*console.count()
It prints the number of times the console.count() is called. It takes a string label parameter. 
It is very helpful to count the number of times a function is called.
In the following example, the console.count() method will run three times */
const func = () => {
  console.count('Function has been called')
};
func();
func();
func();

//Exercises:Level 1
//1.Display the countries array as a table
console.table(users);
//2.Display the countries object as a table
console.table(user);
//3.Use console.group() to group logs
console.group('users')
console.log(users);
console.groupEnd()
//Exercises:Level 2
//1.10 > 2 * 10 use console.assert()
console.assert(10 > 2*10, 'so sanh sai')
//2.Write a warning message using console.warn()
console.warn('con lon Nam dang xam nhap')
//3.Write an error message using console.error()
console.error('lon Nam da trom do bat no lai')

//Exercises:Level 3
//1.Check the speed difference among the following loops: while, for, for of, forEach
const arr = [1,2,3,4,5,6,7,8,9,10]
console.time('Regular for loop')
for (let i = 0; i < 3; i++) {
  console.log('I love u')
}
console.timeEnd('Regular for loop')

console.time('Regular for of loop')
for (let i of arr) {
  console.log('I love u')
}
console.timeEnd('Regular for of loop')


console.time('Regular forEach loop')
  arr.forEach((num)=> console.log(num))
console.timeEnd('Regular forEach loop')

console.time('Regular while loop')
var i;
while (i < 10) {
  text += "The number is " + i;
  i++;
}
console.timeEnd('Regular while loop')


