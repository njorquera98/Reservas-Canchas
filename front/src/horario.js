import React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

let datos;

fetch('http://localhost:4000/api/reservas')
.then((response) => response.json())
.then((data) =>obtenerDatos(data));

function obtenerDatos (dat){
  datos=dat;
  /* console.log(datos) */
}

console.log("Imprimiendo datos inmediato",datos)

setTimeout(function() {
  console.log("Imprimiendo datos luego de 2 seg", datos[0])
}, 2000)
 
const appointments = [
  /* datos.map(reserva => {
    { title: reserva.nombre, startDate: reserva.startDate, endDate: reserva.endDate }
  }), */
  { title: 'Raúl Herrera', startDate: '2022-11-21T09:30', endDate: '2022-11-21T11:00' },
  { title: 'Matías Sandoval', startDate: '2022-11-22T08:00', endDate: '2022-11-22T09:30'},
];
export default function Horario() {
  return (
    <Paper>
      <Scheduler
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
    </Paper>
  );
}