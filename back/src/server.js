// Carga las variables de entorno desde el archivo .env
require("dotenv").config();

// Importamos la configuración de Express, rutas y middlewares desde el archivo app.jsconst app = require("./app");
const app = require("./app");

// Usa el puerto definido por .env o el puerto 3000 por defecto
const PORT = process.env.PORT || 3000;

// Ponemos a la app a "escuchar" peticiones en el puerto antes definido
app.listen(PORT, () => {  
  console.log(`-----------------------------------------`);
  console.log(`   API MZ TUNE RUNNING ON PORT: ${PORT}   `);
  console.log(`   URL: http://localhost:${PORT}          `);
  console.log(`-----------------------------------------`);
});
