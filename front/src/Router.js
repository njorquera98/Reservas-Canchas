import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Horario from './horario';
import Login from './Login';
import Reserva from './Reserva'

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/horario' element={<Horario/>}></Route>
                    <Route path='/reserva' element={<Reserva/>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;