import React, { useEffect, useState, useContext } from 'react';
import UserContext from './context/UserContext';
import RolContext from './context/RolContext'
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

export default function Horario() {

  const {users,setUsers,id_usuariologeado} = useContext(UserContext)
  const {rol,setRol} = useContext(RolContext)
  console.log(id_usuariologeado,'logeado')
  console.log(rol)

  const [loading, setLoading] = useState(false);
  const [datos,setDatos] = useState([]);

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
        firstDayOfWeek={1}
        locale={'es-ES'}
      >
        
        <WeekView
          startDayHour={8}
          endDayHour={21}
          excludedDays={[0]}
          /* timeTableCellComponent={TimeTableCell} */
          
          
        />
        <Appointments />
        <AllDayPanel 
        messages={{allDay: 'Lunes a Sabado'}}
        />
      </Scheduler>
      }
    </Paper>
  );
}