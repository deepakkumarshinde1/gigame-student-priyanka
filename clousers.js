function parent() {
  let count = 0;
  return {
    inc() {
      count++;
      console.log(count);
    },
    dec() {
      count--;
      console.log(count);
    },
  };
}

let f1 = parent();
f1.inc();
f1.inc();
f1.inc();
f1.dec();

// async js
// single thread
