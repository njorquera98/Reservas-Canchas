import './App.css';
import React from 'react';
import Router from './Router';
import Header from './Header'
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

function App() {
  return (
    <div>
    <header>
    {
      <Header></Header>
    }
    </header>
    <nav>
      <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
        <MDBContainer fluid >
                    <MDBNavbarBrand href='#'></MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        /* onClick={() => setShowNavColorThird(!showNavColorThird)} */
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse /* show={showNavColorThird} */ navbar>
                        <MDBNavbarNav className='justify-content-center mb-2 mb-lg-0'>
                          <MDBNavbarItem className='active'>
                              <MDBNavbarLink aria-current='page' href='/'>
                              Inicio
                              </MDBNavbarLink>
                          </MDBNavbarItem>
                          <MDBNavbarItem>
                              <MDBNavbarLink href='/reserva'>Reservar</MDBNavbarLink>
                          </MDBNavbarItem>
                          <MDBNavbarItem>
                              <MDBNavbarLink href='/horario'>Horarios</MDBNavbarLink>
                          </MDBNavbarItem>
                          <MDBNavbarItem>
                              <MDBNavbarLink href='/register'>Registarse</MDBNavbarLink>
                          </MDBNavbarItem>
                          <MDBNavbarItem>
                              <MDBNavbarLink href='/admin/reservas'>Administrar reservas</MDBNavbarLink>
                          </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
    </nav>


    <main>
      <Router />
    </main>
    </div>
  );
}

export default App;