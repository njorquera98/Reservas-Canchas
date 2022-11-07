import './App.css';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Inicio de Sesión</h2>
              <p className="text-white-50 mb-3">Porfavor ingrese su Email y Contraseña!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Contraseña' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Recordar Contraseña' />

              <MDBBtn size='lg'>
                Ingresar
              </MDBBtn>

              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;