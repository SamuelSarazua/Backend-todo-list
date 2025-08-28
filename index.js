require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5501', 
    'http://127.0.0.1:5501',
    'https://backend-todo-list-34qm.onrender.com/'
  ],
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));

// Importar rutas
const getTablas = require('./routes/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routes/get/obtenerTareas');
app.use(getTareas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
});
