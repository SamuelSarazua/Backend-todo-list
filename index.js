require('dotenv').config();
const express = require('express');
const cors = require('cors'); // <--- importar

const app = express();


app.use(cors({
    origin: '*'
}));

const getTablas = require('./routes/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routes/get/obtenerTareas');
app.use(getTareas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
});
