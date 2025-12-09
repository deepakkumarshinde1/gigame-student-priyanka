let tid = setTimeout(() => {
  console.log("namaste"); // after 1 sec === 1000 ms
}, 0);
let count = 10;
let tid2 = setInterval(() => {
  console.log("interval");
  count--;
  if (count === 0) {
    clearInterval(tid2);
  }
}, 1000);

// let tid3 = setInterval(() => {
//   console.log("interval");
// }, 1000);
console.log("hello");
console.log("hi");
console.log(tid);
console.log(tid2);

// async => setTimeout , setInterval, DOM methods , promises etc.
