import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect, useContext} from 'react';
import { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer';
import UserContext from './context/UserContext'

export default function App() {
  const [datos,setDatos] = useState([]);
  const fila=[]
  const [buttonClick,setButtonClick]=useState(0);
  const {id_usuariologeado} = useContext(UserContext)
  useEffect(() => {
      fetch('http://localhost:4000/api/listarreserva/'+id_usuariologeado)
      .then(response => response.json())
      .then(data =>{setDatos((data))});
  },[buttonClick])
  
  function deleteUser(id){
    fetch('http://localhost:4000/api/reservas/'+id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      },
    })
    setButtonClick(id)
  }

  // Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});



  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Nombre</th>
          <th scope='col'>Cancha</th>
          <th scope='col'>Fecha</th>
          <th scope='col'>Hora entrada</th>
          <th scope='col'>Hora salida</th>
          <th scope='col'>Eliminar</th>
          <th scope='col'>Imprimir</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {datos.forEach((dat) => {
          const horaentrada = new Date(dat.hora_entrada)
          const horasalida = new Date(dat.hora_salida)
          fila.push(
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                <i class="fas fa-file-alt fa-2x"></i>
                <div className='ms-3'>
                    <p className='fw-bold mb-1'>{dat.nombre}</p>
                    <p className='text-muted mb-0'>{dat.apellido}</p>
                </div>
                </div>
              </td>
              <td>
                <div className='ms-0 align-items-center'>
                    <p className='text-muted mb-0'>Cancha {dat.tipo_cancha}: {dat.num_cancha}</p>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-0'>{horaentrada.toLocaleDateString('cl-CL')}</p>
              </td>
              <td>
                <p className='fw-normal mb-0'>{horaentrada.toLocaleTimeString()}</p>
              </td>
              <td>
                  <p className='fw-normal mb-0'>{horasalida.toLocaleTimeString()}</p>
              </td>
              <td>
                <MDBBtn color='danger' rounded size='sm' onClick={() => deleteUser(dat.reserva_ID)}>
                  Eliminar
                </MDBBtn>
              </td>
              <td>
                <PDFDownloadLink document={
                <Document>
                    <Page size="A4" style={styles.page}>
                      <View style={styles.section}>
                        <View style={{display:"flex", flexDirection:"row"}}>
                          <View style={{flex:1}}>
                            <Text style={{textAlign:"center", marginTop:"25px"}}>AUTORIZACIÓN USO RECINTOS DEPORTIVOS</Text>
                            <Text></Text>
                            <View style={{margin:"15px", fontSize:"12"}}>
                              <Text style={{marginTop:"50px"}}>Responsable: {dat.nombre} {dat.apellido}</Text>
                              <Text style={{marginTop:"15px"}}>Carrera: {dat.carrera}</Text>
                              <Text style={{marginTop:"15px"}}>Cancha: Cancha {dat.num_cancha}</Text>
                              <Text style={{marginTop:"15px"}}>Tipo de cancha: {dat.tipo_cancha}</Text>
                              <Text style={{marginTop:"15px"}}>Fecha: {horaentrada.toLocaleDateString('cl-CL')}</Text>
                              <Text style={{marginTop:"15px"}}>Hora entrada: {horaentrada.toLocaleTimeString()}</Text>
                              <Text style={{marginTop:"15px"}}>Hora salida: {horasalida.toLocaleTimeString()}</Text>
                              <Text style={{marginTop:"15px"}}>Tarifa: Excento</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </Page>
                </Document>
                } fileName="Autorizacion">
                  <MDBBtn color='primary' rounded size='sm' onClick={() => 'aa'}>
                    Imprimir
                  </MDBBtn> 
                </PDFDownloadLink>
              </td>
            </tr>
          )
        })}
        {fila}
        
      </MDBTableBody>
    </MDBTable>
  );
}