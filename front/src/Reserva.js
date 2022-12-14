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
}
  from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';

const fecha = new Date();
var fechaSeleccion = new Date();

function seleccion(fechaSeleccion,dia){
  
  while (fechaSeleccion.getDay().toString()!==dia) {
    fechaSeleccion.setDate(fechaSeleccion.getDate()+1)
  }
}

/* seleccion(fechaSeleccion,6) */

export default function Reserva() {
  const data={
    "idusuario":"",
    "startDate":"",
    "endDate":"",
    "nombre":"",
    "email":"",
    "telefono":0,
    "carrera":"",
    "listaParticipantes":""
  }


  const handleChange = e => {
    if (e.target.name ==='horaReserva'){
        seleccionaHoraTermino(e.target.value)
        data.startDate=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+"T"+e.target.value
        console.log(data);
    }
    if (e.target.name ==='nombre'){
        data.idusuario=e.target.value
        data.nombre=e.target.value
    }
    if (e.target.name ==='correo'){
        data.email=e.target.value
    }
    if (e.target.name ==='telefono'){
      data.telefono=e.target.value
    }
    if (e.target.name ==='carrera'){
        data.carrera=e.target.value
    }
    if (e.target.name ==='listaParticipantes'){
      data.listaParticipantes=e.target.value
    }
    if(e.target.name ==='dia'){
      fechaSeleccion= new Date()
      seleccion(fechaSeleccion,e.target.value)
      console.log(fecha,'actual')
      console.log(fechaSeleccion,'seleccionada')
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
    case '08:00': data.endDate=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T09:30'; break;
    case '09:40': data.endDate=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T11:10'; break;
    case "11:20": data.endDate=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T12:50'; break;
    case "13:00": data.endDate=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T14:30'; break;
    case "14:45": data.endDate=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T16:15'; break;
    case "16:20": data.endDate=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T15:50'; break;
    case "17:55": data.endDate=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T19:25'; break;
    case "19:30": data.endDate=fechaSeleccion.getFullYear()+"-"+(fechaSeleccion.getMonth()+1)+"-"+fechaSeleccion.getDate()+'T21:00'; break;
  }

}
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-4 text-center">Reservar Cancha</h2>

              <Form.Group className="mb-3">
                <Form.Label>Seleccione Cancha</Form.Label>
                <Form.Select name="cancha" defaultValue={""}>
                <option value="" disabled></option>
                  <option value="cancha1">Cancha 1</option>
                  <option value="cancha2">Cancha 2</option>
                  <option value="cancha3">Cancha 3</option>
                  <option value="cancha4">Cancha 4</option>
                  <option value="cancha5">Cancha 5</option>
                  <option value="cancha6">Cancha 6</option>
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

              <MDBInput wrapperClass='mb-4 w-100' label='Nombre' id='formControlLg' name="nombre" type='text' size="lg" onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' name="correo" type='email' size="lg" onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Telefono' id='formControlLg' name="telefono" type='email' size="lg" onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Carrera' id='formControlLg' name="carrera" type='email' size="lg" onChange={handleChange}/>
              <Form.Group className="mb-3">
              <Form.Label>Lista de Participantes</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" name="listaParticipantes" wrapperClass='mb-6 w-100' onChange={handleChange}/>
              </Form.Group>

              <MDBBtn size='lg' onClick={handleSubmit} href="/horario">
                Ingresar
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
