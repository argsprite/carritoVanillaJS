const yesPromise = false;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (yesPromise) {
      resolve("Promise was fulfilled!");
    }else{
      reject("Promise was rejected X");
    }
  },3000);
});


const fulfilledPromiseHandler = (value) => {
  console.log(value);
};

const rejectedPromiseHandler= (reason) => {
  console.log(reason);
};

myPromise.then(fulfilledPromiseHandler,rejectedPromiseHandler);
