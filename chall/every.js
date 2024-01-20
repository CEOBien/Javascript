Array.prototype.every2 = function (cb) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};

cource = [
  {
    name: "js",
    coin: 600,
    isFinish: true,
  },
  {
    name: "html",
    coin: 200,
    isFinish: false,
  },
  {
    name: "php",
    coin: 600,
    isFinish: true,
  },
];

const rs = cource.every2((value, index, array) => {
  console.log(value, index, array);
  return value.isFinish;
});
console.log(rs);
