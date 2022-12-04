import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
  const [datos,setDatos] = useState([]);
  const fila=[]
  const [buttonClick,setButtonClick]=useState(0);

  useEffect(() => {
      console.log('fetch')
      fetch('http://localhost:4000/api/listarreservas')
      .then(response => response.json())
      .then(data =>{setDatos((data));console.log(datos)});
  },[buttonClick])

  function refresh(){fetch('http://localhost:4000/api/users')
      .then(response => response.json())
      .then(data =>{setDatos((data));console.log(datos)});
      }
  
  function deleteUser(id){
    fetch('http://localhost:4000/api/reservas/'+id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      },
    })
    setButtonClick(id)
  }
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Nombre</th>
          <th scope='col'>Fecha</th>
          <th scope='col'>Hora entrada</th>
          <th scope='col'>Hora salida</th>
          <th scope='col'>Eliminar</th>
          <th scope='col'>Imprimir</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {datos.forEach((dat) => {
          fila.push(
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{dat.nombre}</p>
                    <p className='text-muted mb-0'>{dat.apellido}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{dat.hora_entrada}</p>
                <p className='text-muted mb-0'>{dat.hora_salida}</p>
              </td>
              <td>
                <MDBBadge color='warning' pill>
                  Awaiting
                </MDBBadge>
              </td>
              <td>Senior</td>
              <td>
                <MDBBtn color='danger' rounded size='sm' onClick={() => deleteUser(dat.reserva_ID)}>
                  Delete
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color='danger' rounded size='sm' onClick={() => deleteUser(dat.reserva_ID)}>
                  Delete
                </MDBBtn>
              </td>
            </tr>
          )
        })}
        {fila}
        
      </MDBTableBody>
    </MDBTable>
  );
}