import ReservaModel from "../models/ReservaModel.js";

//Mostrar todos los usuarios 
export const getAllReservas = async (req, res) => {
  try {
    const users = await ReservaModel.findAll()
    res.json(users)
  }
  catch (error) {
    res.json({ message: error.message })
  }
}

//Mostrar un Usuario
export const getReserva = async (req, res) => {
  try {
    const user = await ReservaModel.findAll({
      where: { id: req.params.id }
    })
    res.json(user)
  }
  catch (error) {
    res.json({ message: error.message })
  }
}
//Crear un Usuario
export const createReserva = async (req, res) => {
  try {
    await ReservaModel.create(req.body)
    res.json({ "message": "Usuario Creado" })
  }
  catch (error) {
    res.json({ message: error.message })
  }
}

//Actualizar un Usuario
export const updateReserva = async (req, res) => {
  try {
    await ReservaModel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({ "message": "Usuario Actualizado" })
  }
  catch (error) {
    res.json({ message: error.message })
  }
}

//eliminar un Usuario
export const deleteReserva = async (req, res) => {
  try {
    await ReservaModel.destroy({
      where: { id: req.params.id }
    })
    res.json({ "message": "Usuario Eliminado" })
  }
  catch (error) {
    res.json({ message: error.message })
  }
}