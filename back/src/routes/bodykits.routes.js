const express = require("express");
const router = express.Router();
const { getConnection } = require("../db");

// Obtener todos los bodykits
router.get("/", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();

    // Usamos as en cada campo para tener más facilidad a la hora de usarlos o llamarlos
    const result = await conn.execute(`
      SELECT
        ID           AS "ID",
        NOMBRE       AS "NOMBRE",
        MARCA_COCHE  AS "MARCA_COCHE",
        PREPARADOR   AS "PREPARADOR",
        PRECIO_TOTAL AS "PRECIO_TOTAL",
        IMAGEN       AS "IMAGEN",
        DESCRIPCION  AS "DESCRIPCION"
      FROM BODYKITS
      ORDER BY PREPARADOR, NOMBRE
    `);

    // Devolvemos el resultado como JSON
    res.json(result.rows);

  } catch (e) {
    res.status(500).json({
      error: "Error listando los bodykits",
      details: e.message
    });
  } finally {

    // Liberamos la conn
    if (conn) await conn.close();
  }
});

// Obtener lista de preparadores
router.get("/preparadores", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();

    // 
    const result = await conn.execute(`
      SELECT DISTINCT
        PREPARADOR AS "preparador"
      FROM BODYKITS
      ORDER BY PREPARADOR
    `);

    // Mapeamos el resultado para enviar un array de strings
    res.json(result.rows.map(r => r.preparador));
  } catch (e) {
    res.status(500).json({
      error: "Error listando los preparadores",
      details: e.message
    });
  } finally {
    if (conn) await conn.close();
  }
});

// Filtrar por preparador específico
router.get("/preparador/:nombre", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();

    // Extraemos el nombre del preparador
    const nombre = req.params.nombre;
    const result = await conn.execute(
      `
      SELECT
        ID           AS "ID",
        NOMBRE       AS "NOMBRE",
        MARCA_COCHE  AS "MARCA_COCHE",
        PREPARADOR   AS "PREPARADOR",
        PRECIO_TOTAL AS "PRECIO_TOTAL",
        IMAGEN       AS "IMAGEN",
        DESCRIPCION  AS "DESCRIPCION"
      FROM BODYKITS
      WHERE PREPARADOR = :nombre
      ORDER BY NOMBRE
      `,
      { nombre }
    );

    res.json(result.rows);

  } catch (e) {
    res.status(500).json({
      error: "Error filtrando por preparador",
      details: e.message
    });
  } finally {
    if (conn) await conn.close();
  }
});

module.exports = router;