const express = require('express');
const app = express();

// Importa el router de usuarios
const proveedorrouter = require('./Backend/routers/proveedor');

// Usa el router de usuarios para todas las rutas /usuarios
app.use('/proveedor', proveedorrouter);

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(3000, () => {
  console.log('El servidor esta escuchando en el "localhost:3000"');
});