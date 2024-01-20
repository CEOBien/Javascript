Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

const array = [1, 2, 3, 4, 5];

array.forEach2(function (value, index, array) {
  console.log(value, index, array);
});
