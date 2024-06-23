const express = require('express');
const router = express.Router();
const proveedorcontroller = require('../controller/proveedorcontroller');

// Define las rutas CRUD
router.post('/proveedor', proveedorcontroller.createPRoveedor);

module.exports = router;