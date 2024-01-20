/*Hứa với con người chúng ta cho hoặc nhận được một lời hứa sẽ thực hiện một số hoạt động tại một số 
thời điểm. Nếu chúng ta giữ lời hứa, chúng ta làm cho người khác hạnh phúc nhưng nếu chúng ta không giữ
 lời hứa, nó có thể dẫn đến sự bất mãn. Hứa trong JavaScript có điểm chung với các ví dụ trên. Một lời hứa 
 là một cách để xử lý các hoạt động không đồng bộ trong JavaScript. Nó cho phép người xử lý với giá trị
  thành công hoặc thất bại của hành động không đồng bộ. Điều này cho phép các phương thức không đồng bộ
   trả về các giá trị như các phương thức đồng bộ: thay vì trả lại ngay lập tức giá trị cuối cùng, 
   phương thức không đồng bộ trả về một lời hứa sẽ cung cấp giá trị tại một số điểm trong tương lai. 
   Một lời hứa là ở một trong những trạng thái này: đang chờ xử lý: trạng thái ban đầu, không hoàn thành 
   cũng không bị từ chối. Hoàn thành: Có nghĩa là hoạt động hoàn thành thành công. bị từ chối: có nghĩa là
    hoạt động thất bại. Một lời hứa đang chờ xử lý có thể được thực hiện bằng một giá trị hoặc bị từ chối 
    với một lý do (lỗi). Khi một trong hai tùy chọn này xảy ra, những người xử lý liên quan được xếp hàng 
    bởi phương thức của một lời hứa sau đó được gọi. .
 và Promise.prototype.catch () Phương thức trả về lời hứa, chúng có thể bị xích. */

 /*Promise constructor
We can create a promise using the Promise constructor. We can create a new promise using the
 key word new followed by the word Promise and followed by a parenthesis. Inside the parenthesis,
  it takes a callback function.
 The promise callback function has two parameters which are the resolve and reject functions. */

 // Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error));

/*Fetch API
The Fetch API provides an interface for fetching resources (including across the network). 
It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful
 and flexible feature set. In this challenge we will use fetch to request url and APIS. In addition 
to that let us see demonstrate use case of promises in accessing network resources using the fetch API. */

// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens

