import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Horario from './horario';
import Login from './Login';

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/horario' element={<Horario/>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }

}

export default Router;