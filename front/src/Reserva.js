import './Reserva.css';
import React, {useEffect, useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
}
  from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import UserContext from './context/UserContext';
import RolContext from './context/RolContext';
import { useContext } from 'react';

const fecha = new Date();
var fechaSeleccion = new Date();

function seleccion(fechaSeleccion,dia){
  
  while (fechaSeleccion.getDay().toString()!==dia) {
    fechaSeleccion.setDate(fechaSeleccion.getDate()+1)
  }
}


export default function Reserva() {
  const {id_usuariologeado} = useContext(UserContext)
  const {rol,setRol} = useContext(RolContext)
  const [datos,setDatos] = useState([]);
  const fila=[]
  
  useEffect(() => {
    console.log('fetch')
    fetch('http://localhost:4000/api/users')
    .then(response => response.json())
    .then(data =>{setDatos((data));console.log(datos)});
},[])

  const data={
    "user_ID_FK":id_usuariologeado,
    "cancha_ID_FK":"",
    "hora_entrada":"",
    "hora_salida":"",
    "fecha":fecha.toISOString(),
    "participantes":""
  }


  const handleChange = e => {
    if (e.target.name ==='horaReserva'){
        seleccionaHoraTermino(e.target.value)
        data.hora_entrada=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+"T"+e.target.value
        console.log(data);
    }
    if (e.target.name ==='participantes'){
      data.participantes=e.target.value
    }
    if (e.target.name ==='cancha'){
      data.cancha_ID_FK=e.target.value
    }
    if(e.target.name ==='dia'){
      fechaSeleccion= new Date()
      seleccion(fechaSeleccion,e.target.value)
      console.log(fecha,'actual')
      console.log(fechaSeleccion,'seleccionada')
    }
    if (e.target.name ==='alumnos'){
      data.user_ID_FK=e.target.value
    }

}

const handleSubmit = async() =>{
  await fetch('http://localhost:4000/api/reservas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  console.log('submit');
}

function seleccionaHoraTermino(horainicio){
  // eslint-disable-next-line default-case
  switch(horainicio){
    case '08:00': data.hora_salida=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T09:30'; break;
    case '09:40': data.hora_salida=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T11:10'; break;
    case "11:20": data.hora_salida=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T12:50'; break;
    case "13:00": data.hora_salida=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T14:30'; break;
    case "14:45": data.hora_salida=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T16:15'; break;
    case "16:20": data.hora_salida=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T15:50'; break;
    case "17:55": data.hora_salida=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T19:25'; break;
    case "19:30": data.hora_salida=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T21:00'; break;
  }

}
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-4 text-center">Reservar Cancha</h2>

              { (rol==='administrador') ?
                <Form.Group className="mb-3">
                <Form.Label>Seleccione Alumno</Form.Label>
                <Form.Select name="alumnos" onChange={handleChange} defaultValue={""}>
                <option value="" disabled></option>
                  {datos.forEach((dat) => {
                    fila.push(
                      <option value={dat.user_ID}>{dat.nombre} {dat.apellido}</option>
                    )
                  })}
                  {fila}
                </Form.Select>
              </Form.Group>
              :
              <p></p>
              }

              <Form.Group className="mb-3">
                <Form.Label>Seleccione Cancha</Form.Label>
                <Form.Select name="cancha" onChange={handleChange} defaultValue={""}>
                <option value="" disabled></option>
                  <option value="1">Cancha 1</option>
                  <option value="2">Cancha 2</option>
                  <option value="3">Cancha 3</option>
                  <option value="4">Cancha 4</option>
                  <option value="5">Cancha 5</option>
                  <option value="6">Cancha 6</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Seleccione Dia</Form.Label>
                <Form.Select name="dia" onChange={handleChange} defaultValue={""}>
                  <option value="" disabled></option>
                  <option value="1">Lunes</option>
                  <option value="2">Martes</option>
                  <option value="3">Miercoles</option>
                  <option value="4">Jueves</option>
                  <option value="5">Viernes</option>
                  <option value="6">Sabado</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Seleccione Horario</Form.Label>
                <Form.Select name="horaReserva" onChange={handleChange} defaultValue={""}>
                <option value="" disabled></option>
                  <option value="08:00">08:00 - 09:30</option>
                  <option value="09:40">09:40 - 11:10</option>
                  <option value="11:20">11:20 - 12:50</option>
                  <option value="13:00">13:00 - 14:30</option>
                  <option value="14:45">14:45 - 16:15</option>
                  <option value="16:20">16:20 - 17:50</option>
                  <option value="17:55">17:55 - 19:25</option>
                  <option value="19:30">19:30 - 21:00</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
              <Form.Label>Lista de Participantes</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" name="participantes" wrapperClass='mb-6 w-100' onChange={handleChange}/>
              </Form.Group>

              <MDBBtn size='lg' onClick={handleSubmit} href="/horario/1">
                Ingresar
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
