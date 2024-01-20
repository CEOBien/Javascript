/*JavaScript cho phép viết chức năng bên trong một hàm bên ngoài. 
Chúng ta có thể viết bao nhiêu chức năng bên trong
 như chúng ta muốn. Nếu hàm bên trong truy cập các biến của hàm bên ngoài thì nó được gọi là đóng. */

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


/*Exercises
Exercises: Level 1
Create a closure which has one inner function */
function operation(){
    const a = 5;
    const b = 5;
    function sum(){
        const sum =a + b;
        return sum 
    }
    return sum
}

const newFun = operation();
console.log('tong:',newFun());
/*Exercises: Level 2
Create a closure which has three inner functions */

function IloveU(){
    const a = 'I love U';

    function showLove(){
        return a + '3000'
    }

    function sayLove(){
        for(let i=0; i<3; i++){
            console.log(a);
        }
        return 0
    }

    function makeLove(){
        const b = a.toUpperCase()
        return b

    }

    return {showLove:showLove(),sayLove: sayLove(),makeLove: makeLove()}
}

const Love = IloveU();
console.log(Love.sayLove);
console.log(Love.makeLove);
console.log(Love.showLove);


/*Exercises: Level 3
Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
 It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description. */


function personAccount(){
   const info = {
        firstName:'Dao',
        lastName:'Hai',
        incomes: 20000000,
        expenses:3000000
   }
   
   function totalIncome(){
        
   }
}

