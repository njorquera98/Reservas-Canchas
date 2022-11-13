import React from 'react';
import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

export default function Horario() {
  return (
    <MDBTable responsive>
      <MDBTableBody>
        <tr>
          <th scope='row'>Clave</th>
          <td>Lunes</td>
          <td>Martes</td>
          <td>Miercoles</td>
          <td>Jueves</td>
          <td>Viernes</td>
          <td>Sabado</td>
        </tr>
        <tr>
          <th scope='row'>1 - 2</th>
          <td>Reservado</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>Reservado</td>
        </tr>
        <tr>
          <th scope='row'>3 - 4</th>
        
          <td> </td>
          <td>Reservado</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>Reservado</td>
          
        </tr>
        <tr>
          <th scope='row'>5 - 6</th>
          <td> </td>
          <td> </td>
          <td>Reservado</td>
          <td> </td>
          <td>Reservado</td>
          <td>Reservado</td>
          
        </tr>
        <tr>
          <th scope='row'>7 - 8</th>
          <td> </td>
          <td> </td>
          <td>Reservado</td>
          <td> </td>
          <td> </td>
          <td>Reservado</td>
        </tr>
        <tr>
          <th scope='row'>9 - 10</th>
          <td> </td>
          <td>Reservado</td>
          <td> </td>
          <td> </td>
          <td>Reservado</td>
          <td>Reservado</td>
        </tr>
        <tr>
          <th scope='row'>11 - 12</th>
          <td> </td>
          <td>Reservado</td>
          <td>Reservado</td>
          <td> </td>
          <td> </td>
          <td>Reservado</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}