const fs = require('fs');

// Read a file.
console.log('Before the file been read.');

const file = fs.readFileSync('modules/fs/index.html', 'utf-8');

console.log(file);

console.log('After the file been read.');

// Change a file name.

fs.renameSync('modules/fs/index.html','modules/fs/main.html');

console.log('After the file name been changed.');

// Add at end of the file.

fs.appendFileSync('modules/fs/main.html', '<p>Hola</p>');

console.log('After the file been changed.');

// Delete file.

fs.unlinkSync('modules/fs/main.html');

console.log('After the file been deleted.');