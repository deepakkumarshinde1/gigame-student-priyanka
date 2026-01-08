let user = { name: "deepak" };
let user2 = { ...user };
user2.name = "Kumar";
console.log(user);
console.log(user2);

// function fun(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }

let fun = (a) => (b) => (c) => console.log(a + b + c);

fun(10)(20)(30);
