import express from "express";
import { getAllUsers, getUser, createUser, deleteUser, updateUser } from "../controllers/user-controller.js";
//import { getReservas, getReserva, createReserva, deleteReserva } from "../controllers/reserva-controller.js";

const router = express.Router();

router.get("/",getAllUsers);

router.get("/:id",getUser);

router.post("/",createUser);

router.delete("/:id",deleteUser);

router.put("/:id",updateUser);

//Una vez terminado el user seguir con reservas
/*
router.get("/reservas",getReservas);

router.get("/reservas/:id",getReserva);

router.post("/reservas",createReserva);

router.delete("/reservas/:id",deleteReserva);
*/
export default router;
