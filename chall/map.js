Array.prototype.map2 = function (cb) {
  var arrayLength = this.length;
  var output = [];
  for (let i = 0; i < arrayLength; i++) {
    var result = cb(this[i], i);
    output.push(result);
  }
  return output;
};
const array = ["Dao Hai", "Chieu Duong", "Best friend"];
array.map2((array, index) => {
  console.log(index, array);
});
