/*Higher Order Function
Các hàm bậc cao hơn là các hàm lấy hàm khác làm tham số hoặc trả về một hàm làm giá trị.
Hàm được truyền dưới dạng tham số được gọi là gọi lại.*/
//I.Callback
//Một cuộc gọi lại là một hàm có thể được truyền dưới dạng tham số cho chức năng khác. Xem ví dụ dưới đây.
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
console.log('cube:',cube(callback, 3))
// II.Setting time
//Trong JavaScript, chúng tôi có thể thực hiện một số hoạt động trong một khoảng thời gian nhất định
// hoặc chúng 
//tôi có thể lên lịch (chờ) trong một thời gian để thực hiện một số hoạt động. setInterval setTimeout
//1 Setting Interval using a setInterval function
/*Trong JavaScript, chúng tôi sử dụng chức năng bậc cao SetInterval
 để thực hiện một số hoạt động liên tục với một số khoảng thời gian. 
 Phương thức SetInterval Global lấy hàm gọi lại và thời lượng là tham số. 
Thời lượng là tính bằng mili giây và cuộc gọi lại sẽ luôn được gọi trong khoảng thời gian đó. */
// syntax
// function callback() {
//     // code goes here
//   }
//   setInterval(callback, duration)// it prints hello in every second, 1000ms is 1s
//2 Setting a time using a setTimeout
/*Trong JavaScript, chúng tôi sử dụng chức năng thứ tự cao hơn của
 SetTimeout để thực hiện một số hành động tại một thời điểm nào đó trong tương lai. 
 Phương thức toàn cầu SetTimeout lấy hàm gọi lại và thời lượng dưới dạng tham số. 
Thời lượng là tính bằng mili giây và cuộc gọi lại chờ khoảng thời gian đó. */

// syntax
// function callback() {
//     // code goes here
//   }
//   setTimeout(callback, duration) // duration in milliseconds


//III.Functional Programming
//3 forEach
/*ForEach: Lặp lại một yếu tố mảng. Chúng tôi chỉ sử dụng foreach với các mảng. 
Nó có chức năng gọi lại với các phần tử, tham số chỉ mục và mảng. Chỉ mục và mảng tùy chọn. */


//arr.forEach((element, index, arr) => console.log(index, element, arr))

//4 map
/*Bản đồ: Lặp lại một phần tử mảng và sửa đổi các phần tử mảng. \
Nó có chức năng gọi lại với các phần tử, chỉ mục, tham số mảng và trả về một mảng mới. */
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)

//5 filter
//Lọc: Lọc ra các mục điền đầy đủ điều kiện lọc và trả về một mảng mới.

const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80);
  console.log(scoresGreaterEighty);

  //6 reduce
  /*Giảm: Giảm mất chức năng gọi lại. Hàm gọi lại lấy giá trị ban đầu, 
  hiện tại và tùy chọn làm tham số và trả về một giá trị duy nhất. 
  Đó là một thực tế tốt để xác định giá trị ban đầu cho giá trị tích lũy. 
  Nếu chúng tôi không chỉ định tham số này, theo mặc định tích lũy sẽ nhận được giá trị đầu tiên của mảng. 
  Nếu mảng của chúng tôi là một mảng trống, thì JavaScript sẽ gây ra lỗi.*/

const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
/*every
every: Check if all the elements are similar in one aspect. It returns boolean */
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names2.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)//true
/*find
find: Return the first element which satisfies the condition */
const ages1 = [24, 22, 25, 32, 35, 18]
const age1 = ages1.find((age) => age < 20)

console.log(age1)//18
/*findIndex
findIndex: Return the position of the first element which satisfies the condition */
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5





//HOMEWORK
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland','ice'];
const Names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: 4  },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: 20 },
];
//1.Explain the difference between forEach, map, filter, and reduce.
//foreach lặp lại mảng có index key value,map lặp lại 1 mảng có thể sữa đổi
//filter lọc đk và trả vè 1 mảng mới
//reduce giảm một mảng và lặp
//2.Define a callback function before you use it in forEach, map, filter or reduce.
//done
//3.Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(`list ${country}`));

//4.Use forEach to console.log each name in the names array.
Names.forEach(name => console.log(name));

//5.Use forEach to console.log each number in the numbers array.
Numbers.forEach(number => console.log(number));

//6. Use map to create a new array by changing each country to uppercase in the countries array.
const countryToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countryToUpperCase);

//7.Use map to create an array of countries length from countries array.

const lengthCountries = countries.map((country)=> country.length-1);
console.log(lengthCountries);

//8.Use map to create a new array by changing each number to square in the numbers array
const mapNumbers = Numbers.map((number)=> number ** 2);
console.log(mapNumbers);

//9.Use map to change to each name to uppercase in the names array
const upcaseName = Names.map((name)=> name.toUpperCase());
console.log(upcaseName);

//10.Use map to map the products array to its corresponding prices.
const products1 = products.map((product)=>console.log(product));

//11.Use filter to filter out countries containing land.
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
);
console.log(countriesContainingLand);

//12.Use filter to filter out countries having six character.
const sixCharacter = countries.filter((six)=>six.length === 6);
console.log(sixCharacter);

//13.Use filter to filter out countries containing six letters and more in the country array.
const thanSixCharacter = countries.filter((country) => country.length >= 6);
console.log(thanSixCharacter);

//14.Use filter to filter out country start with 'E'
const startsE = countries.filter((country) => country[0] == 'E');
console.log(startsE);

//15.Use filter to filter out only prices with values.
const pricesProducts = products.filter((product)=>{
  price: products.price
})
console.log(pricesProducts);

//Exercises: Level 2
//1.Find the total price of products by chaining two or more array iterators
//(eg. arr.map(callback).filter(callback).reduce(callback))

const totalPriceProduct = products.map(x=>x.price).reduce((a,b)=>a+b);
console.log(totalPriceProduct); 

//2.Find the sum of price of products using only reduce reduce(callback))
const totalPrice = products.reduce((x,y)=> x+y.price,0);
console.log(totalPrice);


const Ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics={
  count: function () {
        return Ages.length;
    },
  sum: function(){
    return Ages.reduce((a,b)=> a+b);
  },
  min: function(){
    Ages.sort(function(a,b){
      return a-b;
    })
    return Ages[0];
  },
  max:function(){
    Ages.sort(function(a,b){
      return b-a;
    })
    return Ages[0];
  },
  range:function(){
      
    return Math.max(...Ages)- Math.min(...Ages);
  },
  mean:function(){
    return Ages.reduce((a,b)=>a+b)/ Ages.length;
  },
  median:function () {
    Ages.sort(function(a, b) {
      return a - b;
    });
    var mid = Ages.length / 2;
    return mid % 1 ? Ages[mid - 0.5] : (Ages[mid - 1] + Ages[mid]) / 2;
  },
  mode:function(){
    Ages.sort();

    let max =[0,0];
    let count =1;
    for (let i = Ages.length-1; i > 0; --i) {
        if (Ages[i] == Ages[i-1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
        else{
             //So sánh số lần xuất hiện với max[1] 
             if (max[1] < count){ 
                  //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                  //Và gán số lần xuất hiện vào max[1]
                  max[0] = Ages[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
  }
}
console.log('Count:',statistics.count());
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range())//14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}