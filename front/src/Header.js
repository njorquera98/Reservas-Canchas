import React, { Component } from "react";
import uta from "./img/uta.png"

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <div href="/">
                    <h1>test</h1>
                    <img src = {uta} ></img>
                </div>
                <h1>Administracion de recintos deportivos</h1>
                <div href="/admin">
                    <h1>test2</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;