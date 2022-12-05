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
import { useParams } from 'react-router-dom';

export default function Horario() {

  const {users,setUsers,id_usuariologeado} = useContext(UserContext)
  const {rol,setRol} = useContext(RolContext)
  var idparametro = useParams().id
  if (idparametro === '0' | idparametro > '6' | idparametro==='') {
    idparametro ='1'
  }
  

  const [loading, setLoading] = useState(false);
  const [datos,setDatos] = useState([]);

  useEffect(() => {
      setLoading(true)
      fetch('http://localhost:4000/api/reservas/'+idparametro)
      .then(response => response.json())
      .then(data =>{setDatos((data))});
      setLoading(false)
  },[])

  const appointments = contenidoHorario ();
  function contenidoHorario (){
    try {
      const contenidohorario = datos;
      return contenidohorario
    } catch (error) {
      
    }
  }

  const TimeTableCell = React.useCallback(React.memo(({ onDoubleClick, ...restProps }) => (
    <WeekView.TimeTableCell
      {...restProps}
      onDoubleClick={() => window.location.href='/reserva'}
    />
  )), []);

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
        <h2 style={{margin:'50px 0px 40px 0px',textAlign:'center'}}>Horario Cancha de Tenis {idparametro}</h2>
        <WeekView
        timeTableCellComponent={TimeTableCell}
          startDayHour={8}
          endDayHour={21}
          excludedDays={[0]}
          
          
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