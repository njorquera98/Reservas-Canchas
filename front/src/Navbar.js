import React, { Component, useContext } from "react";
import uta from "./img/uta.png"
import UserContext from './context/UserContext'
import RolContext from './context/RolContext'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  

export default function Navbar() {
        const {users,setUsers} = useContext(UserContext)
        const {rol,setRol} = useContext(RolContext)
        console.log(rol)
        return(
            <React.Fragment>
                <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
              <MDBContainer fluid >
                          <MDBNavbarBrand href='#'></MDBNavbarBrand>
                          <MDBNavbarToggler
                              type='button'
                              data-target='#navbarColor02'
                              aria-controls='navbarColor02'
                              aria-expanded='false'
                              aria-label='Toggle navigation'
                          >
                              <MDBIcon icon='bars' fas />
                          </MDBNavbarToggler>
                          <MDBCollapse navbar>
                              <MDBNavbarNav className='justify-content-center mb-2 mb-lg-0'>
                                <MDBNavbarItem className='active'>
                                    <MDBNavbarLink aria-current='page' href='/'> Inicio</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/register'>Registarse</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/reserva'>Reservar</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/horario'>Horarios</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/admin/reservas'>Administrar reservas</MDBNavbarLink>
                                </MDBNavbarItem>
                              </MDBNavbarNav>
                          </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
            </React.Fragment>
            );
    
}
