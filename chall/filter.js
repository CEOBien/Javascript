Array.prototype.filter2 = function (cb) {
  const array = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this);
      if (result) array.push(this[index]);
    }
  }
  return array;
};

cource = [
  {
    name: "js",
    coin: 600,
  },
  {
    name: "html",
    coin: 200,
  },
  {
    name: "php",
    coin: 600,
  },
];

const result = cource.filter2((value) => {
  return value.coin > 200;
});
console.log(result);
