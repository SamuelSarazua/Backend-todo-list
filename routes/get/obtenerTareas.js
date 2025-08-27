const db = require('../../config/database');
const express = require('express');
const router = express.Router();

// Mi ruta get
router.get('/tareas', async(req, res) => {

    try {
        
        let [todasTareas] = await db.query('SELECT * FROM tareas');
        res.json(todasTareas);

    } catch (error) {
        console.log("Error: ", error);
    }

});

module.exports = router;