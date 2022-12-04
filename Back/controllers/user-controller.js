import UserModel from "../models/UserModel.js";

//Mostrar todos los usuarios 
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll()
    res.json(users)
  }
  catch (error) {
    res.json({ message: error.message })
  }
}

//Mostrar un Usuario
export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findAll({
      where: { id: req.params.id }
    })
    res.json(user)
  }
  catch (error) {
    res.json({ message: error.message })
  }
}
//Crear un Usuario
export const createUser = async (req, res) => {
  try {
    await UserModel.create(req.body)
    res.json({ "message": "Usuario Creado" })
  }
  catch (error) {
    res.json({ message: error.message })
  }
}

//Actualizar un Usuario
export const updateUser = async (req, res) => {
  try {
    await UserModel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({ "message": "Usuario Actualizado" })
  }
  catch (error) {
    res.json({ message: error.message })
  }
}

//eliminar un Usuario
export const deleteUser = async (req, res) => {
  try {
    await UserModel.destroy({
      where: { id: req.params.id }
    })
    res.json({ "message": "Usuario Eliminado" })
  }
  catch (error) {
    res.json({ message: error.message })
  }
}