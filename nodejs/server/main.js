function orderProductRequest(product) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering FreeCodeCamp ${product}...`);
    setTimeout(() => {
      if (product === 'cup') {
        resolve('Cup');
      } else if (product === 'shirt')  
        resolve('Shirt');
        alert(`The product: ${product} added to shopping cart`);
      } else {
        reject(`We don't have the product: ${product} ,sorry...`);
        alert(`We don't have the product: ${product} ,sorry...`);
      }
    }, 2000);
  });
}

function addToCart(item) {
  const cart = document.getElementById('cart');
  const li = document.createElement('li');
  li.textContent = item;
  cart.appendChild(li);
}

function clearCart() {
  const cart = document.getElementById('cart');
  cart.innerHTML = '';
}

function orderProduct(product) {
  orderProductRequest(product)
    .then((response) => {
      console.log('Response fulfilled');
      console.log(response);
      addToCart(response);
      return processOrder(response);
    })
    .then((filledResponse) => {
      console.log(filledResponse);
    })
    .catch((error) => {
      console.log(error);
    });
}
