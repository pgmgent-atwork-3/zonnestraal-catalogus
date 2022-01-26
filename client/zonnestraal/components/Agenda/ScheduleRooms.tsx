import React from 'react'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
  ViewSwitcher,
  Toolbar,
  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import getAllRooms from '../../data/getAllRooms.json'


let date = new Date(Date.now());
const currentDate = date.toString()

console.log(getAllRooms)

const ScheduleRooms = () => {

  return (
    <Paper>
      <Scheduler
        data={getAllRooms}
        height={600}
      >

      <ViewState
        /* currentDate={currentDate} */
        defaultCurrentDate={currentDate}
      />

      <WeekView
        startDayHour={9}
        endDayHour={19}
      />
      <MonthView />

      <Toolbar />
      <DateNavigator />
      <TodayButton />
      <ViewSwitcher />

      <Appointments />

      </Scheduler>
    </Paper>
  )
}

export default ScheduleRooms
