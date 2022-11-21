/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import uta from "./img/uta.png"

  

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <div class="uta">
                    <a href="/">
                        <img id="imguta" src = {uta} ></img>
                    </a>
                </div>
                <div class="titulo">
                    <h1>Administracion de recintos deportivos</h1>
                </div>
                <div class="sesion" href="/admin">
                    <h1>Usuario</h1>
                </div>
            </React.Fragment>
            );
    }
}

export default Header;