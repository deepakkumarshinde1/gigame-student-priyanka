console.log("hello");
console.log(text3);
// 'a', 2, 2.2, true, false , null, [], {}, function(){}
let text = 10;
text = 20;
const text2 = 10;
// text2 = 1;
var text3 = 10;
text3 = 200;

// functions
// => a,b => 10,20 => 30
// => a,b => 2,2 => 4

add(10, 20);
add(2, 2);
add("a", "b");
add(2, "2");
add();

function add(a = 0, b = 0) {
  let sum = a + b;
  console.log(sum);
} // function definition

// common function (hoisted)
function fun() {
  // code
}

// expression function
let fun2 = function () {
  // code
};

// callback function => written in other function call
function myFun(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

myFun(10, 20, function (result) {
  console.log(result);
});

// arrow function
let fun3 = () => {
  // code
};
myFun(5, 2, (result) => {
  let square = result * result;
  console.log(square);
});
// IIFE
