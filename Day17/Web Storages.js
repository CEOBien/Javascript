/*Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over 
traditional cookies. Before HTML5, application data had to be stored in cookies, included in every 
server request. Web storage is more secure, and large amounts of data can be stored locally, without
 affecting website performance. The data storage limit of cookies in many web browsers is about 4 KB 
 per cookie. We Storages can store far larger data (at least 5MB) and never transferred to the server. 
 All sites from the same or one origin can store and access the same data.

The data being stored can be accessed using JavaScript, which gives you the ability to leverage 
client-side scripting to do many things that have traditionally involved server-side programming 
and relational databases. There are two Web Storage objects:

sessionStorage
localStorage
localStorage is similar to sessionStorage, except that while data stored in localStorage has no 
expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, 
when the page is closed.

It should be noted that data stored in either localStorage or sessionStorage is specific to the protocol 
of the page.

The keys and the values are always strings (note that, as with objects, integer keys will be automatically
converted to strings). */


/*LocalStorage 
HTML5 LocalStorage là đoạn API lưu trữ web được sử dụng để lưu trữ dữ liệu trên trình duyệt không 
có dữ liệu hết hạn. Dữ liệu sẽ có sẵn trên trình duyệt ngay cả sau khi trình duyệt được đóng.
 LocalStorage được giữ ngay cả giữa các phiên trình duyệt. Điều này có nghĩa là dữ liệu vẫn có sẵn
  khi trình duyệt được đóng và mở lại, và cũng ngay lập tức giữa các tab và cửa sổ. 
  Trong cả hai trường hợp, dữ liệu lưu trữ web không có sẵn giữa các trình duyệt khác nhau. 
  Ví dụ: các đối tượng lưu trữ được tạo trong Firefox không thể được truy cập trong Internet Explorer, 
  giống hệt như cookie. Có năm phương thức để làm việc trên lưu trữ cục bộ: setItem (), getItem (), 
  removeItem (), Clear (), key () */

//Use case of Web Storages
/*Một số trường hợp sử dụng lưu trữ web là lưu trữ dữ liệu tạm thời lưu các sản phẩm mà người 
dùng đặt trong dữ liệu giỏ hàng của mình có thể được cung cấp giữa các yêu cầu trang, 
nhiều tab trình duyệt và cả giữa các phiên trình duyệt sử dụng địa phương có thể được sử
 dụng hoàn toàn bằng cách sử dụng lưu trữ web địa phương có thể Hãy là một chiến thắng hiệu 
 suất tuyệt vời khi một số dữ liệu tĩnh được lưu trữ trên máy khách để giảm thiểu số lượng yêu 
 cầu tiếp theo. Ngay cả hình ảnh cũng có thể được lưu trữ trong các chuỗi bằng cách sử dụng mã hóa
  Base64. có thể được sử dụng cho phương thức xác thực người dùng */

/*HTML5 Web Storage Objects
HTML web storage provides two objects for storing data on the client:

window.localStorage - stores data with no expiration date
window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)
Most modern browsers support Web Storage, however it is good to check browser support for localStorage 
and sessionStorage. Let us see the available methods for the Web Storage objects.
Web Storage objects:

localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
 */

