// DOM => document object model
let element = document.querySelector("h1");
let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", (event) => {
  //   console.log(event);
  element.innerHTML = input.value;
  input.value = "";
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    element.innerHTML = input.value;
    input.value = "";
  }
});
// button.addEventListener("mouseout", (event) => {
//   //   console.log(event);

//   element.innerHTML = "Hello";
// });
console.log(element);
// document.querySelectorAll();
