let button = document.querySelector("#child");
let section = document.querySelector("#parent");
let loginForm = document.querySelector("#loginForm");

section.addEventListener(
  "click",
  () => {
    console.log("section i.e parent is clicked");
  },
  false
);

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button i.e child is clicked");
});

loginForm.addEventListener("submit", (event) => {
  event.stopPropagation();
  event.preventDefault();
  let formData = new FormData(loginForm);
  formData.forEach((value, name) => {
    console.log(value, name);
  });
});
