import { pool } from "../database/db.js";

export const getReservas = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM reservas");
  res.json(rows);
};

export const getReserva = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM reservas WHERE idusuario = ?", [
    req.params.id,
  ]);
  console.log([rows]);

  if (rows.length <= 0)
    return res.status(404).json({
      messaje: "Employee not fund",
    });

  res.json(rows[0]);
};

export const createReserva = async (req, res) => {
  const { idusuario,startDate,endDate,nombre,email,telefono,carrera,listaParticipantes} = req.body;

  const [rows] = await pool.query(
    "INSERT INTO reservas (idusuario,startDate,endDate,nombre,email,telefono,carrera,listaParticipantes) VALUES (?,?,?,?,?,?,?,?)",
    [idusuario,startDate,endDate,nombre,email,telefono,carrera,listaParticipantes]
  );
  console.log(req.body);
  res.send({ rows });
};

export const deleteReserva = async (req, res) => {
  const [result] = await pool.query("DELETE FROM reservas WHERE idusuario = ?", [
    req.params.id,
  ]);
  if (result.affectedRows <= 0)
    return res.status(404).json({
      message: "User no encontrado",
    });

  console.log(result);
  res.sendStatus(204);
};

/* export const updateReserva = async (req,res) =>{
    const {id} = req.params
    const {name} = req.body

    const [result] = await pool.query('UPDATE reservas SET name = IFNULL(?,NAME) WHERE id = ?',[name,id])

    if (result.affectedRows==0) return res.status(404).json({
        messaje:'User no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?',[id])
    console.log(result)
    res.json(rows[0])
} */
