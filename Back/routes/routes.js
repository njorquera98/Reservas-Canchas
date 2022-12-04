import express from "express";
import { getAllUsers, getUser, createUser, deleteUser, updateUser } from "../controllers/user-controller.js";
import { getAllReservas, getReserva, createReserva, deleteReserva, updateReserva } from "../controllers/reserva-controller.js";

const router = express.Router();

router.get("/",getAllUsers);

router.get("/:id",getUser);

router.post("/",createUser);

router.delete("/:id",deleteUser);

router.put("/:id",updateUser);

router.get("/reservas", getAllReservas);

router.get("/reservas/:id",getReserva);

router.post("/reservas",createReserva);

router.put("/:id",updateReserva);

router.delete("/reservas/:id",deleteReserva);

export default router;
