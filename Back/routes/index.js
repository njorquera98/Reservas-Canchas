import { pool } from "../database/db.js";
import { Router } from "express";
import { json } from "sequelize";
import { getUsers, getUser, createUser, deleteUser, updateUser } from "../controllers/user-controller.js";
import { getReservas, getReserva,createReserva, deleteReserva } from "../controllers/reserva-controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello Worldd");
});

router.get("/users",getUsers);

router.get("/users/:id",getUser);

router.post("/users",createUser);

router.delete("/users/:id",deleteUser);

router.patch("/users/:id",updateUser);

router.get("/reservas",getReservas);

router.get("/reservas/:id",getReserva);

router.post("/reservas",createReserva);

router.delete("/reservas/:id",deleteReserva);

/* router.patch("/reservas/:id",updateReserva); */


export default router;
