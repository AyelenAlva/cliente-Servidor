// Ejemplo básico de implementación de controlador
const { getDbConnection } = require('../bd/conexion');

const createPRoveedor = async (req, res) => {
    const { nombreProveedor, contacto, telefono, gmail } = req.body;

    try {
        const connection = await getDbConnection();
        await connection.query(
            'INSERT INTO proveedor (`nombreProveedor`, `contacto`, `telefono`, `gmail`) VALUES (?, ?, ?, ?)',
            [nombreProveedor, contacto, telefono, gmail]
        );
        
        await connection.end();
        res.sendStatus(201); // Respuesta de éxito
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al crear registro de personal'); // Respuesta de error
    }
};



module.exports = {
    createPRoveedor,
 
};
