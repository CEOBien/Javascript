//Creating a time object
//Once we create time object. The time object will provide information about time. Let us create a time object
const now = new Date()
console.log("Day now:",now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

//We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table.

//Getting full year
//Let's extract or get the full year from a time object.

const now1 = new Date()
console.log("Year:",now1.getFullYear()) // 2020

//Getting month
//Let's extract or get the month from a time object.

const now2 = new Date()
console.log("Month:",now2.getMonth()) // 0, because the month is January,  month(0-11)

// Getting date
// Let's extract or get the date of the month from a time object.

const now4 = new Date()
console.log("Day:",now4.getDate()) // 4, because the day of the month is 4th,  day(1-

// Getting day
// Let's extract or get the day of the week from a time object.

const now5 = new Date()
console.log("Day now1:",now5.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)


// Getting hours
// Let's extract or get the hours from a time object.

const now6 = new Date()
console.log("Hour:",now6.getHours()) // 0, because the time is 00:56:41


console.log("Bai13");
var age;
var year = 2010;
//khoi tao yearNow
var yearNow = new Date();
//get year
const yearNow2 =  yearNow.getFullYear();

age = yearNow2 - year;

age > 18 ?console.log(`Ban dang la ${age} tuoi. Ban da du tuoi de lai xe`):console.log(`Ban dang la ${age} tuoi.Ban con ${18 - age} nam nua de duoc lai xe`);


//Bai14
//1 ngay co 86,400
console.log("Bai14");
const ageLive = 100;
const seconds = 86400//1440phut * 60s;
const ageYearOfSecond = 365 * seconds;
const secondLive = ageLive * ageYearOfSecond;
console.log(`Enter number of years you live: ${ageLive}`);
console.log(`You lived ${secondLive} seconds.`);

