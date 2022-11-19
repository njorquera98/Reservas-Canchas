import { pool } from "../database/db.js";

export const getUsers = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM usuarios");
  res.json(rows);
};

export const getUser = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [
    req.params.id,
  ]);
  console.log([rows]);

  if (rows.length <= 0)
    return res.status(404).json({
      messaje: "Employee not fund",
    });

  res.json(rows[0]);
};

export const createUser = async (req, res) => {
  const { correo, nombre, contrasena } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO usuarios (correo,nombre,contrasena) VALUES (?,?,?)",
    [correo, nombre, contrasena]
  );
  console.log(req.body);
  res.send({ rows });
};

export const deleteUser = async (req, res) => {
  const [result] = await pool.query("DELETE FROM usuarios WHERE id = ?", [
    req.params.id,
  ]);
  if (result.affectedRows <= 0)
    return res.status(404).json({
      message: "User no encontrado",
    });

  console.log(result);
  res.sendStatus(204);
};

export const updateUser = async (req,res) =>{
    const {id} = req.params
    const {name} = req.body

    const [result] = await pool.query('UPDATE usuarios SET name = IFNULL(?,NAME) WHERE id = ?',[name,id])

    if (result.affectedRows==0) return res.status(404).json({
        messaje:'User no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?',[id])
    console.log(result)
    res.json(rows[0])
}
