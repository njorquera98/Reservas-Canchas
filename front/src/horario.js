import React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';


const appointments = [
  { title: 'Raúl Herrera', startDate: '2022-11-14T09:30', endDate: '2022-11-14T11:00' },
  { title: 'Matías Sandoval', startDate: '2022-11-16T08:00', endDate: '2022-11-16T09:30'},
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