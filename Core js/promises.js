// promises are async
// async try catch handling
// create our own or 3rd party promise or js in-build promise
// single or multi promise

async function div(a, b) {
  if (b === 0) {
    return Promise.reject(`Can't div a number by zero`);
  } else {
    return Promise.resolve(a / b);
  }
}
// handel a single promise
div(10, 5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

div(10, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// async await
async function runPromise() {
  try {
    let result = await p1();
    let result2 = await p2(result);
    let result3 = await p3(result2, result);
    let result4 = await p4();
  } catch (error) {}
}
runPromise();

p1()
  .then((result) => {
    return p2(result);
  })
  .then((result2) => {
    return p3(result2);
  })
  .then((result3) => {
    return p4();
  })
  .then((result4) => {})
  .catch((error) => {});
