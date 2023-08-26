const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Ruta raíz, sirve el archivo index.html
  if (req.url === '/' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'index.html');

    // Leer el archivo index.html
    fs.readFile(filePath, 'utf-8', (err, content) => {
      if (err) {
        // Error al leer el archivo
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      // Respuesta exitosa, enviar contenido HTML
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  }
  // Ruta para servir el archivo main.js
  else if (req.url === '/main.js' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'main.js');

    // Leer el archivo main.js
    fs.readFile(filePath, 'utf-8', (err, content) => {
      if (err) {
        // Error al leer el archivo
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      // Respuesta exitosa, enviar contenido JavaScript
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(content);
    });
  } else {
    // Ruta no encontrada
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
