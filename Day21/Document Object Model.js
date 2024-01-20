/*getElementsByTagName():takes a tag name as a string parameter and this method returns an
 HTMLCollection object. An HTMLCollection is an array like object of HTML elements. 
 The length property provides the size of the collection. Whenever we use this method we access
  the individual elements using index or after loop through each individual items. An HTMLCollection 
does not support all array methods therefore we should use regular for loop instead of forEach. */

const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

/*getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an 
array like list of HTML elements. The length property provides the size of the collection. 
It is possible to loop through all the HTMLCollection elements. See the example below */

const allTitles1 = document.getElementsByClassName('title')

console.log(allTitles1) //HTMLCollections
console.log(allTitles1.length) // 4

for (let i = 0; i < allTitles1.length; i++) {
  console.log(allTitles1[i]) // prints each elements in the HTMLCollection
}


//Getting an element by id
//getElementsById() targets a single HTML element. We pass the id without # as an argument.

let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>


/*
Getting elements by using querySelector methods
The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.

querySelector: can be used to select HTML element by its tag name, id or class. 
If the tag name is used it selects only the first element. */

let firstTitle1 = document.querySelector('h1') // select the first available h1 element
let firstTitle2= document.querySelector('#first-title') // select id with first-title
let firstTitle3 = document.querySelector('.title') // select the first available element with class title

/*
querySelectorAll: can be used to select html elements by its tag name or class. 
It returns a nodeList which is an array like object which supports array methods.
 We can use for loop or forEach to loop through each nodeList elements. */

 const allTitles4 = document.querySelectorAll('h1') // selects all the available h1 elements in the page

 console.log(allTitles4.length) // 4
 for (let i = 0; i < allTitles4.length; i++) {
   console.log(allTitles4[i])
 }
 
 allTitles.forEach(title => console.log(title))
 const allTitles5 = document.querySelectorAll('.title') // the same goes for selecting using class

/*
Adding attribute
An attribute is added in the opening tag of HTML which gives additional information about the element.
Common HTML attributes:id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.
*/

const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

/*
Thêm thuộc tính bằng SetAttribution Phương thức SetAttribution () đặt bất kỳ thuộc tính HTML nào.
 Nó lấy hai tham số loại thuộc tính và tên của thuộc tính.
 Hãy thêm thuộc tính lớp và ID cho tiêu đề thứ tư.
*/

const titles1 = document.querySelectorAll('h1')
titles1[3].setAttribute('class', 'title')
titles1[3].setAttribute('id', 'fourth-title')

/*Adding class using classList
Thêm lớp bằng cách sử dụng danh sách lớp Phương thức danh sách lớp là một phương pháp tốt để nối thêm lớp. 
Nó không ghi đè lớp gốc nếu một lớp tồn tại thay vì thêm lớp bổ sung cho phần tử. */

//another way to setting an attribute: append the class, doesn't override
titles1[3].classList.add('title', 'header-title')