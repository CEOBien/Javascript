Array.prototype.some2 = function (cb) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this);
      if (result) return true;
    }
  }
  return false;
};

cource = [
  {
    name: "js",
    coin: 600,
    isFinish: false,
  },
  {
    name: "html",
    coin: 200,
    isFinish: false,
  },
  {
    name: "php",
    coin: 600,
    isFinish: false,
  },
];

const rs = cource.some2((value) => {
  return value.isFinish;
});
console.log(rs);
