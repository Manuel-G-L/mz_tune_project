const express = require("express");
const cors = require("cors");
const path = require("path")

// Traemos los archivos que gestionan los endpoints de coches y bodykits
const cochesRoutes = require("./routes/coches.routes");
const bodykitsRoutes = require("./routes/bodykits.routes");

const app = express();

// Cors para que el frontend haga peticiones al backend desde otro puerto
app.use(cors());

// Json permite que el servidor entienda los datos recibidos de las peticiones a la BD
app.use(express.json());

// Ruta de las imagenes de las paginas
app.use("/img", express.static(path.join(__dirname, "..", "public", "images")));

// Api health y api coches
app.get("/api/health", (req, res) => {res.json({ ok: true });});
app.use("/api/coches", cochesRoutes);
app.use("/api/bodykits", bodykitsRoutes);

// Exportamos la configuración para que server.js pueda levantar el servicio
module.exports = app;