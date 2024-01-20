//1 Declare a function fullName and it print out your full name.

function fullName(){
    console.log("Dao Xuan Hai");
}

fullName();

//2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName1(firstName, lastName){
    return firstName + lastName;
}

console.log(fullName1('Dao', ' Hai'));

//3 Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(num1, num2){
    const sum = num1 + num2;
    return sum;
}

console.log('2 cong 3 bang may , 2 cong 3 bang ',addNumbers(2,3));

//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(l,w) {
    const area = l * w
    return area;
};

console.log('dien tich hinh chu nhat:', areaOfRectangle(9,3)); 

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(l,w){
    const perimeter = 2*(l+w);
    return perimeter;
}

console.log('chu vi hinh chu nhat', perimeterOfRectangle(2,7));
//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(l,w) {
    const volumeOfRectPrism = l*w*l;
    return volumeOfRectPrism;
  }
console.log('volumeOfRectPrism:',volumeOfRectPrism(5,9));

//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r){
    const Pi = 3.14;
    const areaOfCircle = Pi * r * r;
    return areaOfCircle;
}
 console.log('dien tich hinh tron la', areaOfCircle(5));

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
    const Pi = 3.14;
    const circumOfCircle = 2*Pi*r;
    return circumOfCircle;
  }
console.log('circumOfCircle', circumOfCircle(5));

//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(m,v){
    const density = m/v;
    return density;
}
console.log('density:', density(20,4));

//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedObject(km,h){
    const speed = km/h;
    return speed;
}

console.log('toc do cua doi tuong la ', speedObject(320,4));

//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function Weight(m,g){
    const weight = m*getComputedStyle;
    return weight
}
//12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC){
    const oF = (oC * 9/5) + 32;
    return oF;
}

//13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. 
//BMI is used to broadly define different weight groups in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obese based the information given below.

//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function season(month){
    switch(month){
        case 1&&2&&3:
            console.log("Spring");
            break;
        case 4,5,6:
            console.log("Summer");
            break;
        case 7,8,9:
            console.log("Autumn");
            break;
        case 10,11,12:
            console.log("Winter");
            break;
            default:
                text = "No found season";
    }
}
console.log(season(1));
//15 Math.max returns its largest argument.
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(...max){
    
    const numberMax = Math.max(...max);
    return numberMax;
}

console.log(findMax(1,9,2));