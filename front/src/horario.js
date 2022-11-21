import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';


export default function Horario() {

  const [loading, setLoading] = useState(false);
  const [datos,setDatos] = useState([]);

 /*  function obtenerDatos (dat){
    datos=dat;
    console.log(datos)
  } */
  useEffect(() => {
      setLoading(true)
      console.log('fetch')
      fetch('http://localhost:4000/api/reservas')
      .then(response => response.json())
      .then(data =>{setDatos((data));console.log(datos)});
      setLoading(false)
  },[])

  const appointments = contenidoHorario ();
  function contenidoHorario (){
    try {
      console.log("Imprimiendo datos inmediato",datos)
      const contenidohorario = datos;
      return contenidohorario
    } catch (error) {
      
    }
  }
  return (
    <Paper>
      {
        loading ? "cargando.."
        :<Scheduler
        data={appointments}
        height={660}
      >
        <WeekView
          startDayHour={8}
          endDayHour={21}
        />
        <Appointments />
        <AllDayPanel />
      </Scheduler>
      }
    </Paper>
  );
}