/*Tạo hàm reduce 
hàm này sẽ nhận 2 tham số là callback và itininalValue
t sẽ dùng vong for để lặp mảng */

Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  // nếu mà không có biến initialValue thì không cho nó lặp từ 0 nữa và gắn result bằng vị trí thứu 0 trong mảng
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    /*callback sẽ lưu 4 đối số là biến tích trữ, biến hiện tại, index, và mảng gốc*/
    // mỗi lần lặp sẽ lưu vào biến tích trữ là result
    result = callback(result, this[i], i, this);
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce2((total, currenIndex, index, array) => {
  
  return index + currenIndex;
}, 10);

console.log(result);
