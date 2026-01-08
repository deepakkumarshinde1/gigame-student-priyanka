// Promise.race([]);
// Promise.allSettled([]);
// Promise.all([]);

String.prototype.getMoreData = function () {
  let text = this.toString();
  return {
    string: text,
    uc: text.toUpperCase(),
    lc: text.toLowerCase(),
    len: text.length,
  };
};

let text = "Kumar";
text = text.getMoreData();
console.log(text);

class Animal {
  constructor() {}
  running() {
    console.log("running");
  }
}

class Human extends Animal {
  constructor() {
    super();
    this.name = "Deepakkumar";
  }
}
console.log(new Human());
//Human.prototype = Object.create(Animal.prototype);
