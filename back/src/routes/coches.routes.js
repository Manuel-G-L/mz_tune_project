const express = require("express");
const router = express.Router();
const { getConnection } = require("../db");

<<<<<<< HEAD
// 1. Obtener todos los coches (CORREGIDO)
=======
// 1. Obtener todos los coches
>>>>>>> 004d03aeb95d5b0749798f70f67165b9374b9abc
router.get("/", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();
    const result = await conn.execute(`
      SELECT
<<<<<<< HEAD
        ID          AS "id",
        MARCA       AS "marca",
        NOMBRE      AS "nombre",
        PRECIO      AS "precio",
        HP          AS "hp",
        IMAGEN      AS "imagen",
        DESCRIPCION AS "descripcion" 
=======
        ID      AS "id",
        MARCA   AS "marca",
        NOMBRE  AS "nombre",
        PRECIO  AS "precio",
        HP      AS "hp",
        IMAGEN  AS "imagen"
>>>>>>> 004d03aeb95d5b0749798f70f67165b9374b9abc
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

<<<<<<< HEAD
// 2. Obtener solo las marcas (Este se queda igual)
=======
// 2. Obtener solo las marcas (para filtros o desplegables)
>>>>>>> 004d03aeb95d5b0749798f70f67165b9374b9abc
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
<<<<<<< HEAD
    res.json(result.rows.map(r => r.marca));
=======

    // Devolvemos un array simple de strings: ["BMW", "Audi", "Seat"...]
    res.json(result.rows.map(r => r.marca));

>>>>>>> 004d03aeb95d5b0749798f70f67165b9374b9abc
  } catch (e) {
    res.status(500).json({
      error: "Error listando las marcas",
      details: e.message
    });
  } finally {
    if (conn) await conn.close();
  }
});

<<<<<<< HEAD
// 3. Filtrar coches por marca (CORREGIDO)
=======
// 3. Filtrar coches por marca específica
>>>>>>> 004d03aeb95d5b0749798f70f67165b9374b9abc
router.get("/marca/:marca", async (req, res) => {
  let conn;
  try {
    conn = await getConnection();
    const marca = req.params.marca;
    const result = await conn.execute(
      `
      SELECT
<<<<<<< HEAD
        ID          AS "id",
        MARCA       AS "marca",
        NOMBRE      AS "nombre",
        PRECIO      AS "precio",
        HP          AS "hp",
        IMAGEN      AS "imagen",
        DESCRIPCION AS "descripcion"
=======
        ID      AS "id",
        MARCA   AS "marca",
        NOMBRE  AS "nombre",
        PRECIO  AS "precio",
        HP      AS "hp",
        IMAGEN  AS "imagen"
>>>>>>> 004d03aeb95d5b0749798f70f67165b9374b9abc
      FROM COCHES
      WHERE MARCA = :marca
      ORDER BY NOMBRE
      `,
<<<<<<< HEAD
      { marca }
=======
      { marca } // Parámetro de seguridad para Oracle
>>>>>>> 004d03aeb95d5b0749798f70f67165b9374b9abc
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