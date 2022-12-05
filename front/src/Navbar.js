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
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
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
                                {users ?
                                <React.Fragment>
                                <MDBNavbarItem>
                                <MDBNavbarLink href='/reserva'>Reservar</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Horarios
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        {(rol==='administrador') ? 
                                        <MDBDropdownItem link href='/admin/horario'>Todas las canchas</MDBDropdownItem>
                                        :
                                        <p></p>
                                        }
                                        <MDBDropdownItem link href='/horario/1'>Cancha de Tenis 1</MDBDropdownItem>
                                        <MDBDropdownItem link href='/horario/2'>Cancha de Tenis 2</MDBDropdownItem>
                                        <MDBDropdownItem link href='/horario/3'>Cancha de Tenis 3</MDBDropdownItem>
                                        <MDBDropdownItem link href='/horario/4'>Cancha de Tenis 4</MDBDropdownItem>
                                        <MDBDropdownItem link href='/horario/5'>Cancha de Tenis 5</MDBDropdownItem>
                                        <MDBDropdownItem link href='/horario/6'>Cancha de Tenis 6</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                                </MDBNavbarItem>
                                { (rol==='administrador') ? 
                                <MDBNavbarItem>
                                <MDBNavbarLink href='/admin/reservas'>Administrar reservas</MDBNavbarLink>
                                </MDBNavbarItem>
                                :
                                <MDBNavbarItem>
                                <MDBNavbarLink href='/user/reservas'>Mis Reservas</MDBNavbarLink>
                                </MDBNavbarItem>
                                }
                                </React.Fragment>
                                :
                                <React.Fragment>
                                <MDBNavbarItem className='active'>
                                    <MDBNavbarLink aria-current='page' href='/'> Inicio</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/register'>Registarse</MDBNavbarLink>
                                </MDBNavbarItem>
                                </React.Fragment>
                                }
                              </MDBNavbarNav>
                          </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
            </React.Fragment>
            );
    
}
