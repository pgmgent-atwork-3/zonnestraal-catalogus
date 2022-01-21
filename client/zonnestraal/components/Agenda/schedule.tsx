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
import { appointments } from '../../data/appointments';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_CARS_RESERVATION = gql`
query {
  getAllTransportReservationForAdmin{
    id
    transport_id
    profile_id
    name
    from_date
    till_date
    created_on
    edited_on
    transport {
      id
      title
      brand
      type
    }
    profile {
      id
      display_name
    }
  } 
}
`


let date = new Date(Date.now());
const currentDate = date.toString()

console.log(currentDate)

const Schedule = () => {
  const { loading, error, data } = useQuery(GET_ALL_CARS_RESERVATION)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const cars = data.getAllTransportReservationForAdmin
  console.log(cars)

  return (
    <Paper>
      <Scheduler
        data={cars}
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

export default Schedule
