import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

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

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page} >
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

/* ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`); */


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
                              <Text style={{marginTop:"15px"}}>Fecha: {dat.hora_entrada}</Text>
                              <Text style={{marginTop:"15px"}}>Hora entrada: {dat.hora_entrada}</Text>
                              <Text style={{marginTop:"15px"}}>Hora salida: {dat.hora_salida}</Text>
                              <Text style={{marginTop:"15px"}}>Tarifa: Excento</Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      {/* <View style={styles.section}>
                        <Text>Section #2</Text>
                      </View> */}
                    </Page>
                </Document>
                } fileName="FORM">
                  <MDBBtn color='danger' rounded size='sm' onClick={() => 'aa'}>
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