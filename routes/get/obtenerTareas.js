const express = require('express');
const router = express.Router();
const db = require('../../config/database');

router.get('/tareas', async (req, res) => {
    try {
        let [resultadoTareas] = await db.query('SELECT * FROM tareas');
        res.json(resultadoTareas);
    } catch (error) {
        console.log("Error en /tareas:", error);
        res.status(500).json({ error: "Error en la base de datos" });
    }
});

module.exports = router;
