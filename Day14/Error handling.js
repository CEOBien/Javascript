/*Error Handling
JavaScript is a loosely-typed language.
 Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.

JavaScript similar to python or Java provides an error-handling mechanism to catch runtime
 errors using try-catch-finally block. */
/*
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
try:Kết thúc mã đáng ngờ có thể gây ra lỗi trong khối thử. 
Câu lệnh thử cho phép chúng tôi xác định một khối mã được kiểm tra các lỗi trong khi nó đang được thực thi.
catch:Viết mã để làm điều gì đó trong khối bắt khi xảy ra lỗi. 
Khối Catch có thể có các tham số sẽ cung cấp cho bạn thông tin lỗi. 
Khối bắt được sử dụng để ghi lại lỗi hoặc hiển thị các tin nhắn cụ thể cho người dùng.
finally:Cuối cùng, khối sẽ luôn được thực thi bất kể xảy ra lỗi. Khối cuối cùng có thể được sử dụng 
để hoàn thành các biến còn lại hoặc đặt lại các biến có thể đã thay đổi trước khi xảy ra lỗi trong khối thử.
*/
try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err)
  }

  try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.error(err) // we can use console.log() or console.error()
  } finally {
    console.log('In any case I will be executed')
  }