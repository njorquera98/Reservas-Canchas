import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Horario from './horario';
import Login from './Login';
import Reserva from './Reserva'
import Register from "./Register";
import AdminReservas from "./AdminReservas";
import EditarReserva from "./EditarReserva";
import UserReservas from "./UserReservas";
import AdminHorario from "./AdminHorario";

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path="/horario/:id" element={<Horario/>}></Route>
                    <Route path='/reserva' element={<Reserva/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/user/reservas' element={<UserReservas/>}></Route>
                    <Route path="/admin/horario" element={<AdminHorario/>}></Route>
                    <Route path='/admin/reservas' element={<AdminReservas/>}></Route>
                    <Route path='/admin/editarreserva/:id' element={<EditarReserva/>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;