const express = require("express");
const router = express.Router();
const { getConnection } = require("../db");

// 1. Obtener todos los coches
router.get("/", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();
    const result = await conn.execute(`
      SELECT
        ID      AS "id",
        MARCA   AS "marca",
        NOMBRE  AS "nombre",
        PRECIO  AS "precio",
        HP      AS "hp",
        IMAGEN  AS "imagen"
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

// 2. Obtener solo las marcas (para filtros o desplegables)
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

    // Devolvemos un array simple de strings: ["BMW", "Audi", "Seat"...]
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

// 3. Filtrar coches por marca específica
router.get("/marca/:marca", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();
    const marca = req.params.marca;
    const result = await conn.execute(
      `
      SELECT
        ID      AS "id",
        MARCA   AS "marca",
        NOMBRE  AS "nombre",
        PRECIO  AS "precio",
        HP      AS "hp",
        IMAGEN  AS "imagen"
      FROM COCHES
      WHERE MARCA = :marca
      ORDER BY NOMBRE
      `,
      { marca } // Parámetro de seguridad para Oracle
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