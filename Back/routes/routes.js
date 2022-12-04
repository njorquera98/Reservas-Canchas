import express from "express";
import { getAllUsers, getUser, createUser, deleteUser, updateUser } from "../controllers/user-controller.js";
import { getAllReservas, getReserva, createReserva, deleteReserva, updateReserva } from "../controllers/reserva-controller.js";

const router = express.Router();

router.get("/user",getAllUsers);

router.get("/user/:id",getUser);

router.post("/user",createUser);

router.delete("/user/:id",deleteUser);

router.put("/user/:id",updateUser);

router.get("/reservas", getAllReservas);

router.get("/reservas/:id",getReserva);

router.post("/reservas",createReserva);

router.put("/reservas/:id",updateReserva);

router.delete("/reservas/:id",deleteReserva);

export default router;
