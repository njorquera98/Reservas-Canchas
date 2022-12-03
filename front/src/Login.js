import './Login.css';
import React, {useContext} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import UserContext from './context/UserContext';
import RolContext from './context/RolContext'

export default function Login() {
  const {users, setUsers} = useContext(UserContext)
  const {rol, setRol} = useContext(RolContext)
  const data={
    correo: '',
    contrasena: ''
  }

  const handleChange = e => {
      if (e.target.name ==='correo'){
          data.correo=e.target.value
      }
      if (e.target.name ==='contrasena'){
          data.contrasena=e.target.value
      }

  }
  
  const [datos,setDatos] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async() =>{
    setLoading(true)
      console.log("submit",data)
      await fetch('http://localhost:4000/api/users/'+data.correo)
      .then(response => response.json())
      .then(dat =>{ 
        console.log('resultado',dat)
        console.log('escrito',data)
        if (dat.contrasena===data.contrasena) {
          console.log('contrasenacorrecta')
          window.sessionStorage.setItem('users',dat.nombre)
          window.sessionStorage.setItem('id_usuariologeado',dat.user_ID)
          window.sessionStorage.setItem('rol',dat.rol)
          window.location.href='/reserva'

        }
        else{
          alert('Usuario y/o contraseña incorrecta')
        }
    });
  
  }
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Inicio de Sesión</h2>
              <p className="text-white-50 mb-3">Porfavor ingrese su Usuario y Contraseña!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Usuario' id='formControlLg' name="correo" type='email' size="lg" onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Contraseña' id='formControlLg' name="contrasena" type='password' size="lg" onChange={handleChange}/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Recordar Contraseña' />

              <MDBBtn onClick={handleSubmit} size='lg' href="#">
                Ingresar
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}