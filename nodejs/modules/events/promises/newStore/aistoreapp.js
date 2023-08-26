function orderProduct(product) {//Creamos la function orderProduct
  return new Promise((resolve, reject) => {
    console.log(`Ordering FreeCodeCamp ${product}...`);
    setTimeout(() => {
      if (product === 'cup') {
        resolve(`*FreeCodeCamp ${product} was added to shopping cart*`);
      } else {
        reject(`(X) We don't have that product. Sorry...`);
      }
    }, 2000);
  });
}

function processOrder(response) {
  return new Promise((resolve) => {
    console.log(`Processing order...`);
    console.log(`The response was ------> ${response}`);
    setTimeout(() => {
      resolve(`Thanks for your purchase. Enjoy your product! <3`);
    }, 4000);
  });
}

orderProduct('cup')
  .then((response) => {
    console.log('Response fulfilled');
    console.log(response);
    return processOrder(response);
  })
  .then((filledResponse) => {
    console.log(filledResponse);
  })
  .catch((error) => {
    console.log(error);
  });
