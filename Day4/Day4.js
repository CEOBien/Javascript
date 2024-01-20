//Exercises: Level 1
//Get user input using prompt(“Enter your age:”). If user is 18 or older , 
//give feedback:'You are old enough to drive' 
//but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const age = 17;

if(age >= 18)
{
    console.log('You are old enough to drive');
}else{
    console.log(`you need ${18- age} year to drive`);
}

//2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result 
//to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

if(age < 20){
    console.log(`You are ${20 - age} years older than me.`);
}else if(age === 20){
    console.log('same');
}else{
    console.log("bat ngo chua ong gia");
}
//3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 6;
let b = 4;
a>b?console.log(`${a} greater than ${b}`):console.log("oke");
//4 ven numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let c = 10
c % 2 == 0?console.log(`${c} is an even number`):console.log(`${c} is an odd number`);
//Exercises: Level 2
//1 Write a code which can give grades to students according to theirs scores:
const scores = 89;
if(scores > 0 && scores < 49){
    console.log("F");
}else if(scores < 60){
    console.log("D");
}else if(scores < 70){
    console.log("C");
}else if(scores < 90){
    console.log("B");
}else{
    console.log("A");
}