// Viết mã sạch
// Hướng dẫn kiểu JavaScript
// Hướng dẫn kiểu JavaScript là một tập hợp các tiêu chuẩn cho biết cách viết và tổ chức mã JavaScript.
// Trong phần này, chúng ta sẽ nói về các hướng dẫn JavaScript và cách viết một mã sạch.

// JavaScript là một ngôn ngữ lập trình và giống như ngôn ngữ của con người, nó có cú pháp. 
//Cú pháp của JavaScript phải được viết theo một nguyên tắc văn phong nhất định để thuyết phục và đơn giản.

// Tại sao chúng ta cần hướng dẫn phong cách
// Bạn đã viết mã một mình trong một thời gian dài nhưng bây giờ nó dường như hoạt động
// trong một nhóm. Bạn viết mã cho mình miễn là nó chạy không quan trọng, tuy nhiên khi bạn 
//làm việc trong nhóm gồm 10 hoặc 20 nhà phát triển trở lên trên một dự án và trên cùng một cơ sở mã,
// mã sẽ lộn xộn và khó quản lý nếu có. không có bất kỳ hướng dẫn nào để tuân theo.

// Bạn có thể phát triển các hướng dẫn và quy ước của riêng mình hoặc bạn cũng có thể điều chỉnh 
//các hướng dẫn đã được phát triển tốt. Hãy cho chúng tôi biết các nguyên tắc phổ biến nhất. Các Hướng 
//dẫn Kiểu JavaScript phổ biến nhất

// Hướng dẫn phong cách JavaScript của Airbnb
// Hướng dẫn về kiểu chuẩn JavaScript
// Hướng dẫn về kiểu JavaScript của Google
// Hướng dẫn phong cách JavaScript của Airbnb
// Airbnb có một trong những hướng dẫn về kiểu JavaScript phổ biến nhất trên internet.
// Nó cũng bao gồm gần như mọi khía cạnh của JavaScript và nó được nhiều nhà phát triển và công ty áp dụng.
// Bạn có thể xem hướng dẫn về phong cách Airbnb . Tôi cũng muốn giới thiệu để thử nó. Phong cách của họ rất
// dễ sử dụng và đơn giản để hiểu.

// Hướng dẫn Kiểu JavaScript Chuẩn
// Đây là hướng dẫn không phổ biến như Airbnb nhưng nó đáng để xem xét nó. Họ đã xóa dấu chấm phẩy
// trong hướng dẫn kiểu của họ .

// Hướng dẫn về kiểu JavaScript của Google
// Tôi không nói nhiều về hướng dẫn của Google và tôi không sử dụng đúng hơn là tôi khuyên bạn 
//nên xem từ liên kết này .

// Các quy ước về mã hóa JavaScript
// Trong thử thách này, chúng tôi cũng sử dụng các quy ước và hướng dẫn viết mã JavaScript chung. 
//Quy ước mã hóa là các hướng dẫn về phong cách lập trình được phát triển bởi một cá nhân, một nhóm 
//hoặc một công ty.

// Quy ước mã hóa giúp:

// viết mã sạch
// để cải thiện khả năng đọc mã
// để cải thiện khả năng tái sử dụng và khả năng bảo trì của mã
// Các quy ước mã hóa bao gồm

// Các quy tắc đặt tên và khai báo cho các biến
// Các quy tắc đặt tên và khai báo cho các hàm
// Quy tắc sử dụng khoảng trắng, thụt lề và nhận xét
// Các nguyên tắc và thực hành lập trình
// Quy ước sử dụng trong 30DaysOfJavaScript
// Trong thử thách này, chúng tôi tuân theo quy ước JavaScript thông thường nhưng tôi cũng đã thêm vào
// sở thích viết của mình.

// Chúng tôi đã sử dụng camelCase cho các biến và hàm.
// Tất cả các tên biến đều bắt đầu bằng một chữ cái.
// Chúng tôi đã chọn sử dụng hằng số cho hằng số, mảng, đối tượng và hàm. Thay vì dấu ngoặc kép, 
//chúng tôi chọn sử dụng dấu ngoặc kép hoặc dấu ngoặc kép. Trích dẫn duy nhất đang trở nên hợp thời trang.
// Chúng tôi cũng đã xóa dấu chấm phẩy khỏi mã của mình nhưng đó là vấn đề sở thích cá nhân.
// Khoảng trắng xung quanh toán tử số học, toán tử gán và sau dấu phẩy
// Hàm mũi tên thay vì khai báo hàm
// Trả về rõ ràng thay vì trả về ngầm định nếu hàm là một lớp lót
// Không có dấu phẩy ở cuối giá trị cuối cùng của một đối tượng
// Chúng tôi thích cái này + =, - =, * = / =, ** = thay vì phiên bản dài hơn
// Khi chúng ta sử dụng console.log (), tốt hơn là bạn nên in kèm theo một chuỗi thẻ để xác định nơi xuất hiện của bảng điều khiển
// Biến
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'

// const PI = Math.PI
// const gravity = 9.81
// Array
// Chúng tôi đã chọn đặt tên mảng là số nhiều

// những cái tên
// con số
// Quốc gia
// ngôn ngữ
// kỹ năng
// trái cây
// rau
// // arrays
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
// const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
// Function
// Đến đây bạn đã rất quen thuộc với khai báo hàm, hàm biểu thức, hàm mũi tên và hàm ẩn danh. 
//Trong thử thách này, chúng tôi có xu hướng sử dụng chức năng mũi tên thay vì các chức năng khác.
// Hàm mũi tên không thay thế cho các hàm khác. Ngoài ra, hàm mũi tên và khai báo hàm không hoàn toàn
// giống nhau. Vì vậy, bạn nên biết khi nào nên sử dụng và khi nào không. Tôi sẽ trình bày chi tiết sự 
//khác biệt trong các phần khác. Chúng tôi sẽ sử dụng trả về rõ ràng thay vì trả về ngầm định nếu hàm là 
//một lớp lót

// // function which return full name of a person
// const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// // function which calculates a square of a number
// const square = (n) => n * n

// // a function which generate random hexa colors
// const hexaColor = () => {
//   const str = '0123456789abcdef'
//   let hexa = '#'
//   let index
//   for (let i = 0; i < 6; i++) {
//     index = Math.floor(Math.random() * str.length)
//     hexa += str[index]
//   }
//   return hexa
// }

// // a function which shows date and time
// const showDateTime = () => {
//   const now = new Date()
//   const year = now.getFullYear()
//   const month = now.getMonth() + 1
//   const date = now.getDate()
//   let hours = now.getHours()
//   let minutes = now.getMinutes()
//   if (hours < 10) {
//     hours = '0' + hours
//   }
//   if (minutes < 10) {
//     minutes = '0' + minutes
//   }

//   const dateMonthYear = date + '.' + month + '.' + year
//   const time = hours + ':' + minutes
//   const fullTime = dateMonthYear + ' ' + time
//   return fullTime
// }
// Nó new Dat().toLocaleString()cũng có thể được sử dụng để hiển thị ngày giờ hiện tại.
// Các toLocaleString()phương thức có các đối số khác nhau. Bạn có thể tìm hiểu thêm về ngày và giờ 
//từ liên kết này .

// Vòng lặp
// Chúng tôi thèm muốn nhiều loại vòng lặp trong thử thách này. Vòng lặp for thông thường, 
//vòng lặp while, vòng lặp do while, vòng lặp for của, vòng lặp forEach và vòng lặp for trong. 
//Hãy xem cách chúng tôi sử dụng chúng:

// for (let i = 0; i < n; i++){
//     console.log()
// }

// // declaring an array variable
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// // iterating an array using regular for loop
// let len = names.length;
// for(let i = 0; i < len; i++){
//     console.log(names[i].toUpperCase())
// }


// // iterating an array using for of
// for( const name of names) {
//     console.log(name.toUpperCase())
// }

// // iterating array using forEach 
// names.forEach((name) => name.toUpperCase())


// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
//   isMarried: true
// }
// for(const key in person) {
//     console.log(key)
// }
// Các đối tượng
// Chúng tôi khai báo đối tượng theo nghĩa đen với const .

// // declaring object literal
// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: ['HTML','CSS','JavaScript','TypeScript', 'React','Node','MongoDB','Python','D3.js'],
//   isMarried: true
// }
// // iterating through object keys
// for(const key in person) {
//     console.log(key, person[key])
// }
// Có điều kiện
// Chúng tôi nói nếu, nếu khác, nếu khác nếu khác, chuyển đổi và toán tử bậc ba trong các thử thách trước.

// // syntax
// if (condition) {
//  // this part of code run for truthy condition
// } else {
//  // this part of code run for false condition
// }
// // if else
// let num = 3
// if (num > 0) {
//  console.log(`${num} is a positive number`)
// } else {
//  console.log(`${num} is a negative number`)
// }
// //  3 is a positive number
// // if else if else if else

// let a = 0
// if (a > 0) {
//  console.log(`${a} is a positive number`)
// } else if (a < 0) {
//  console.log(`${a} is a negative number`)
// } else if (a == 0) {
//  console.log(`${a} is zero`)
// } else {
//  console.log(`${a} is not a number`)
// }
// // Switch More Examples
// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//  case 'monday':
//    console.log('Today is Monday')
//    break
//  case 'tuesday':
//    console.log('Today is Tuesday')
//    break
//  case 'wednesday':
//    console.log('Today is Wednesday')
//    break
//  case 'thursday':
//    console.log('Today is Thursday')
//    break
//  case 'friday':
//    console.log('Today is Friday')
//    break
//  case 'saturday':
//    console.log('Today is Saturday')
//    break
//  case 'sunday':
//    console.log('Today is Sunday')
//    break
//  default:
//    console.log('It is not a week day.')
// }
// // ternary

// let isRaining = true
// isRaining
//  ? console.log('You need a rain coat.')
//  : console.log('No need for a rain coat.')
// Các lớp học
// Chúng tôi khai báo lớp với CamelCase bắt đầu bằng chữ in hoa.

// // syntax
// class ClassName {
//     // code goes here
// }
// // defining class
// class Person {
//   constructor(firstName, lastName) {
//     console.log(this) // Check the output from here
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }
// Dù bạn làm theo hướng dẫn phong cách nào, hãy nhất quán. Thực hiện theo một số mô hình lập trình và mẫu thiết kế. Hãy nhớ rằng, nếu bạn không viết mã cho mình theo thứ tự hoặc 
//thời trang nhất định thì sẽ rất khó để đọc mã của bạn. Vì vậy, hãy làm một việc giúp ích cho
// chính bạn hoặc cho ai đó sẽ đọc mã của bạn bằng cách viết mã có thể đọc được.

// 🌕Bạn là người ngăn nắp. Bây giờ, bạn đã biết cách viết mã sạch, vì vậy bất kỳ ai biết tiếng Anh đều có thể hiểu mã của bạn. Bạn luôn tiến bộ và bạn là người đứng đầu trong 20 bước trên con đường vươn tới sự vĩ đại.