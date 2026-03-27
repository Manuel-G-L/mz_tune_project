// Cargamos la libreria de oracle para node.js
const oracledb = require("oracledb");

// Configuramos el formato de salida de las consultas select para que sea un objeto
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// Función asincrona para obtener una conexión a la base de datos, utilizando las variables de entorno para la configuración
async function getConnection() {

  // Usamos await para esperar a que la BD responda
  return oracledb.getConnection({

    // Leemos las variables de entorno para configurar la conexión a la base de datos
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING,
  });
}

// Exportamos la función para poder usar getConeection() desde cualquier ruta o controlador
module.exports = { getConnection };
