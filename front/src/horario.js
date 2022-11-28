import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

export default function Horario() {

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
  /* const PREFIX = 'Demo';
  
  const classes = {
    todayCell: `${PREFIX}-mondayell`,
    weekendCell: `${PREFIX}-weekendCell`,
    today: `${PREFIX}-today`,
    weekend: `${PREFIX}-weekend`,
  };

  const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(({ theme }) => ({
    [`&.${classes.todayCell}`]: {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.14),
      },
      '&:focus': {
        backgroundColor: alpha(theme.palette.primary.main, 0.16),
      },
    },
    [`&.${classes.weekendCell}`]: {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      '&:hover': {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      },
      '&:focus': {
        backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
      },
    },
  }));

  const TimeTableCell = (props) => {
  const { startDate } = props;
  const date = new Date(startDate);

  if (date.getDate() === new Date().getDate()) {
    return <StyledWeekViewTimeTableCell {...props} className={classes.todayCell}/>;
  } if (date.getDay() === 0 || date.getDay() === 6) {
    return <StyledWeekViewTimeTableCell {...props} className={classes.weekendCell} />;
  } return <StyledWeekViewTimeTableCell {...props} />;
};
*/
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