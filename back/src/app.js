const express = require("express");
const cors = require("cors");
const path = require("path")
const cochesRoutes = require("./routes/coches.routes");
const bodykitsRoutes = require("./routes/bodykits.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de las imagenes de las paginas
app.use("/img", express.static(path.join(__dirname, "..", "public", "images")));

// Api health y api coches
app.get("/api/health", (req, res) => {res.json({ ok: true });});
app.use("/api/coches", cochesRoutes);
app.use("/api/bodykits", bodykitsRoutes);

module.exports = app;