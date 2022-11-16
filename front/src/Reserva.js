import './Reserva.css';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  //MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Reserva() {
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-4 text-center">Reservar Cancha</h2>

              <Form.Group className="mb-3">
                <Form.Label>Seleccione Cancha</Form.Label>
                <Form.Select>
                  <option>Cancha 1</option>
                  <option>Cancha 2</option>
                  <option>Cancha 3</option>
                  <option>Cancha 4</option>
                  <option>Cancha 5</option>
                  <option>Cancha 6</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Seleccione Horario</Form.Label>
                <Form.Select>
                  <option>08:00 - 09:30</option>
                  <option>09:40 - 11:10</option>
                  <option>11:20 - 12:50</option>
                  <option>13:00 - 14:30</option>
                  <option>14:45 - 16:15</option>
                  <option>16:20 - 17:50</option>
                  <option>17:55 - 19:25</option>
                  <option>19:30 - 21:00</option>
                </Form.Select>
              </Form.Group>

              <MDBInput wrapperClass='mb-4 w-100' label='Nombre' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Telefono' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Carrera' id='formControlLg' type='email' size="lg" />
              <InputGroup>
                <Form.Control as="textarea" aria-label="With textarea" wrapperClass='mb-6 w-100'/>
              </InputGroup>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Estas de acuerdo con las condiciones' />

              <MDBBtn size='lg' href="/horario">
                Ingresar
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
