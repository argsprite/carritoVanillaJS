function productOrder(product) {//Creamos la funcion productOrder
  return new Promise((resolve, reject) => {
    console.log(`Ordering FreeCodeCamp ${product}...`);
    setTimeout(() => {
      if (product ==='cup') {
        resolve(`*FreeCodeCamp ${product} was added to shopping cart*`);
      } else {
        reject(`(X) We don't have that product, Sorry...`);
      }
    },2000);
  });
}

function orderHandler(response) {
  return new Promise((resolve) => {
    console.log(`Processing order...`);
    console.log(`The response was ------> ${response}`);
    setTimeout(() => {
        resolve(`Thanks for buy. Enjoy your product! <3`);
    },4000);
  });
}

productOrder('cup')
  .then( response => {
    console.log('Response fulfilled');
    console.log(response);
    return orderHandler(response);
  })
  .then(filledResponse => {
    console.log(filledResponse);
  })
  .catch(rejectResponse => {
    console.log(rejectResponse);
  })
