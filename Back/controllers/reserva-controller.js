import { pool } from "../database/db.js";

export const getReservas = async (req, res) => {
  const [rows] = await pool.query("SELECT u.nombre AS title,hora_entrada AS startDate,hora_salida AS endDate FROM reserva, usuario u WHERE user_ID_FK = u.user_ID");
  res.json(rows);
};

export const listarReservas = async (req, res) => {
  const [rows] = await pool.query("SELECT u.nombre,u.apellido, u.carrera, c.num_cancha, c.tipo_cancha, c.capacidad, reserva_ID, hora_entrada ,hora_salida FROM reserva, usuario u, cancha c WHERE user_ID_FK = u.user_ID AND c.cancha_ID=cancha_ID_FK ");
  res.json(rows);
};

export const getReserva = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM reserva WHERE correo = ?", [
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
  const { user_ID_FK, cancha_ID_FK, hora_entrada, hora_salida, fecha, participantes} = req.body;

  const [rows] = await pool.query(
    "INSERT INTO reserva (user_ID_FK, cancha_ID_FK, hora_entrada, hora_salida, fecha, participantes) VALUES (?,?,?,?,?,?)",
    [user_ID_FK, cancha_ID_FK, hora_entrada, hora_salida, fecha, participantes]
  );
  console.log(req.body);
  res.send({ rows });
};

export const deleteReserva = async (req, res) => {
  const [result] = await pool.query("DELETE FROM reserva WHERE reserva_ID = ?", [
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
