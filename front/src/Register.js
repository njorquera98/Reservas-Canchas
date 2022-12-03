import './Login.css';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';


export default function Register() {
  const data={
    rol:'',
    nombre: '',
    apellido: '',
    rut: 0,
    correo: '',
    carrera: '',
    telefono: 0,
    contrasena: '',

  }

  const handleChange = e => {
    if (e.target.name ==='correo'){
      data.correo=e.target.value
    }
    if (e.target.name ==='contrasena'){
      data.contrasena=e.target.value
    }
    if (e.target.name ==='rol'){
      data.rol=e.target.value
    }
    if (e.target.name ==='nombre'){
      data.nombre=e.target.value
    }
    if (e.target.name ==='apellido'){
      data.apellido=e.target.value
    }
    if (e.target.name ==='rut'){
      data.rut=e.target.value
    }
    if (e.target.name ==='telefono'){
      data.telefono=e.target.value
    }
    if (e.target.name ==='carrera'){
      data.carrera=e.target.value
      console.log(data)
    }

  }

  const handleSubmit = async() =>{
      await fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      })
  }
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Registrarse</h2>
              <p className="text-white-50 mb-3">Porfavor ingrese su Email y Contraseña!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' name="correo" type='email' size="lg" onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Contraseña' id='formControlLg' name="contrasena" type='password' size="lg" onChange={handleChange}/>
              <Form.Group className="mb-3">
                <Form.Label>Tipo</Form.Label>
                <Form.Select name="rol" onChange={handleChange} defaultValue={""}>
                  <option value="" disabled></option>
                  <option value="alumno">Alumno</option>
                  <option value="administrador">Administrador</option>
                </Form.Select>
              </Form.Group>
              <MDBInput wrapperClass='mb-4 w-100' label='Nombre' id='formControlLg' name="nombre" type='email' size="lg" onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Apellido' id='formControlLg' name="apellido" type='email' size="lg" onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Rut' id='formControlLg' name="rut" type='number' size="lg" onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Telefono' id='formControlLg' name="telefono" type='number' size="lg" onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Carrera' id='formControlLg' name="carrera" type='email' size="lg" onChange={handleChange}/>

              <MDBBtn onClick={handleSubmit} size='lg' href="/">
                Registrarse
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}