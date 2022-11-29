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
      fetch('http://localhost:4000/api/users')
      .then(response => response.json())
      .then(data =>{setDatos((data));console.log(datos)});
  },[buttonClick])

  function refresh(){fetch('http://localhost:4000/api/users')
      .then(response => response.json())
      .then(data =>{setDatos((data));console.log(datos)});
      }
  
  function deleteUser(id){
    fetch('http://localhost:4000/api/users/'+id, {
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
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Editar</th>
          <th scope='col'>Eliminar</th>
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
                    <p className='fw-bold mb-1'>{dat.Nombre}</p>
                    <p className='text-muted mb-0'>{dat.Correo}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>Designer</p>
                <p className='text-muted mb-0'>UI/UX</p>
              </td>
              <td>
                <MDBBadge color='warning' pill>
                  Awaiting
                </MDBBadge>
              </td>
              <td>Senior</td>
              <td>
                <MDBBtn color='link' rounded size='sm' href='/admin/editarreserva'>
                  Edit
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color='danger' rounded size='sm' onClick={() => deleteUser(dat.id_usuario)}>
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