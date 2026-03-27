const express = require("express");
const router = express.Router();
const { getConnection } = require("../db");

// Obtener la lista de coches entera
router.get("/", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();
    const result = await conn.execute(`
      SELECT
        ID          AS "id",
        MARCA       AS "marca",
        NOMBRE      AS "nombre",
        PRECIO      AS "precio",
        HP          AS "hp",
        IMAGEN      AS "imagen",
        DESCRIPCION AS "descripcion" 
      FROM COCHES
      ORDER BY MARCA, NOMBRE
    `);

    res.json(result.rows);

  } catch (e) {
    res.status(500).json({
      error: "Error listando los coches",
      details: e.message
    });
  } finally {

    // Cerramos la conn
    if (conn) await conn.close();
  }
});

// Obtener solo las marcas
router.get("/marcas", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();
    const result = await conn.execute(`
      SELECT DISTINCT
        MARCA AS "marca"
      FROM COCHES
      ORDER BY MARCA
    `);

    // Convertimos el array de objetos en un array simple
    res.json(result.rows.map(r => r.marca));
  } catch (e) {
    res.status(500).json({
      error: "Error listando las marcas",
      details: e.message
    });
  } finally {
    if (conn) await conn.close();
  }
});

// Filtrar coches por marca
router.get("/marca/:marca", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();
    
    // Ontenemos la marca de los params
    const marca = req.params.marca;
    const result = await conn.execute(
      `
      SELECT
        ID          AS "id",
        MARCA       AS "marca",
        NOMBRE      AS "nombre",
        PRECIO      AS "precio",
        HP          AS "hp",
        IMAGEN      AS "imagen",
        DESCRIPCION AS "descripcion"
      FROM COCHES
      WHERE MARCA = :marca
      ORDER BY NOMBRE
      `,
      { marca }
    );

    res.json(result.rows);

  } catch (e) {
    res.status(500).json({
      error: "Error filtrando por marca",
      details: e.message
    });
  } finally {
    if (conn) await conn.close();
  }
});

// Exportación del router para usarlo en app.js
module.exports = router;