//console.log(process);
//console.log(process.env);

//Si los argumentos que ingresamos en la terminal son 6 y 7

//Y ahora utilizamos el modulo process con el

//console.log(process.argv);

// process.argv: []
// An array containing the command line arguments.
//   The first element will be 'node',
//   the second element will be the name of the JavaScript file.
//   The next elements will be any additional command line arguments

// ↓    ↓       ↓    ↓
// [node, app.js, 6, 7]
// [  0 ,   1   , 2, 3]

// console.log(process.argv[2]);
// console.log(process.argv[3]);

let nashe = [];

for(let i = 2; i < process.argv.length; i++){

  //console.log(process.argv[i]);

  nashe.push(process.argv[i]);

}
console.log(nashe);

//console.log(process.memoryUsage());

//console.log(process.env);
