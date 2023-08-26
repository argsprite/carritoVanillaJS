const orderStatus = () => Math.random() < 0.8;

const pizzaOrder = new Promise((resolve, reject) => {
  setTimeout(()=> {
    if (orderStatus()) {
      resolve("The Pizza is on the way");
    }else{
      reject("XXX The order was rejected... XXX");
    }
  },3);
});

pizzaOrder
  .then((msgOk)=> {
    console.log(msgOk);
  })
  .catch((msgNo)=>{
    console.log(msgNo);
  });
/*
const orderFulfilledHandler= (orderFulfilled) => {
      console.log(orderFulfilled);
};
*/

/*
const orderRejectedHandler= (orderRejected) => {
      console.log(orderRejected);
};
*/


