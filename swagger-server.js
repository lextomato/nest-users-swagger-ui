const express = require('express');
const path = require('path');

const app = express();

// Define la carpeta donde está tu Swagger UI
const swaggerDistPath = path.join(__dirname);

// Sirve los archivos estáticos de Swagger UI
app.use(express.static(swaggerDistPath));

// Redirige todas las solicitudes al index.html de Swagger
app.get('/', (req, res) => {
  res.sendFile(path.join(swaggerDistPath, 'index.html'));
});

// Inicia el servidor en el puerto 3000 o cualquier otro
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor de Swagger UI disponible en http://localhost:${port}`);
});
