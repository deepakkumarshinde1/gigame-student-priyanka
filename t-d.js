let input = document.querySelector("#input");

function debounce(cb, time) {
  let timeInterval = null;
  return function (event) {
    if (timeInterval) {
      clearTimeout(timeInterval);
    }
    timeInterval = setTimeout(() => {
      cb(event);
    }, time);
  };
}
input.addEventListener(
  "keyup",
  debounce((event) => {
    console.log(input.value);
  }, 1000)
);

function throttling(cb, time) {
  let start = true;
  return function (event) {
    if (start) {
      start = false;
      cb(event);
      setTimeout(() => {
        start = true;
      }, time);
    }
  };
}
window.addEventListener(
  "scroll",
  throttling((event) => {
    console.log("scroll");
  }, 1000)
);
