import React, { Component, useContext } from "react";
import uta from "./img/uta.png"
import UserContext from './context/UserContext'
import RolContext from './context/RolContext'
import { MDBIcon } from "mdb-react-ui-kit";

export default function Header() {
        const {users,setUsers} = useContext(UserContext)
        const {rol,setRol} = useContext(RolContext)
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
                    { users ? <frameElement>
                        <h2>{users}<a href="/">
                            <MDBIcon fas icon="sign-out-alt" size='1x' className='ms-3' onClick={() => window.sessionStorage.setItem('users','')}/>
                        </a>
                        </h2> 
                        </frameElement>
                    :
                    <h2></h2>
                     }
                </div>
            </React.Fragment>
            );
    
}
