const EventEmitter = require('events');


const productEmitter = new EventEmitter();


//WE DEFINE THE EVENT
productEmitter.on('purchase', (price,units) => {
  console.log(`***PURCHASE HAS MADE***
  Units: ${units}
  Price: $${price*units}
  `);
});

//WE EMIT THE EVENT
productEmitter.emit('purchase',500,5);

//console.log(EventEmitter);
