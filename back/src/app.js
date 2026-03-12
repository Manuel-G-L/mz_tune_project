const express = require("express");
const cors = require("cors");
const path = require("path")
const cochesRoutes = require("./routes/coches.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/img", express.static(path.join(__dirname, "../public/images")));

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/coches", cochesRoutes);

module.exports = app;