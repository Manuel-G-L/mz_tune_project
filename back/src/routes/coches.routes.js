const express = require("express");
const router = express.Router();
const { getConnection } = require("../db");

// 1. Obtener todos los coches (CORREGIDO)
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
    if (conn) await conn.close();
  }
});

// 2. Obtener solo las marcas (Este se queda igual)
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

// 3. Filtrar coches por marca (CORREGIDO)
router.get("/marca/:marca", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();
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

module.exports = router;