import React, { Component } from "react";

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <a href="/">
                    <h1>test</h1>
                </a>
                <h1>Administracion de recintos deportivos</h1>
                <a href="/admin">
                    <h1>test2</h1>
                </a>
            </React.Fragment>
        );
    }
}