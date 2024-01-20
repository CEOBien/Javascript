// for(let i = 0; i <= 10; i++){
//     console.log(`tu 0 - 10: ${i}`);
// }
// for(let i = 10; i > 0; i--){
//     console.log(`tu 10 - 0: ${i}`);
// }

// const n = 10;
// for(let i = 0; i <= n; i++){
//     console.log(`tu 0 - n: ${i}`);
// }

//5 Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i*i}`);
    
}
//6 Use loop to print the following pattern:
for (let i = 1; i <= 10; i++) {
    console.log(`${i}  ${i*i} ${i*i*i}`);
    
}
//7 Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 1; i <= 100; i++) {
    if(i%2 == 0){
        console.log(`${i}`);
    }
    
    
}
//8 Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 1; i <= 100; i++) {
    if(i%2 != 0){
        console.log(`${i}`);
    }  
}
//9 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
var sum = 0;
for (let i = 1; i <= 100; i++) {
        sum += i;
        
      
}
console.log(`tong :${sum}`);
//10 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds
var sumEvens = 0;
var sumOdds = 0;
for (let i = 0; i <= 100; i++) {
    if(i%2 == 0){
        sumEvens += i;
        
    }else{
        sumOdds += i;
        
    }
}
console.log(`evens :${sumEvens}`);
console.log(`odds :${sumOdds}` );
//12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
const arr = [];
arr.push(sumEvens);
arr.push(sumOdds);
console.log(arr);
//13 Develop a small script which generate array of 5 random numbers
let n = (Math.random());
console.log("random", n);
//14 Develop a small script which generate a six characters random id:
let r = (Math.random() + 1).toString(36).substring(6);
console.log("random", r);