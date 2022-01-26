import React, { useState } from 'react'
/* import 'date-fns' */
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import styled from 'styled-components'

interface Props {
  
}

const PickerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    margin-top:${({ theme }) => theme.margins.normal};
  }
`

const DatePickerRange = (props: Props) => {

  const [ selectedDate, setSelectedDate] = useState(new Date("2022-01-11T12:00:00"));

  const handleChange = (date: any) => {
    setSelectedDate(date)
  }

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <PickerContainer>
          <KeyboardDatePicker 
            disableToolbar
            variant='inline'
            format='MM/dd/yyy'
            margin='normal'
            id='date-picker'
            label='Kies een dag'
            value={selectedDate}
            onChange={handleChange}
            KeyboardButtonProps={{
              'aria-label' : 'change date'
            }}
          />

          <KeyboardTimePicker
            disableToolbar
            variant='inline'
            margin='normal'
            id='time-picker'
            label='Kies een uur'
            value={selectedDate}
            onChange={handleChange}
            KeyboardButtonProps={{
              'aria-label' : 'change hour'
            }}
          />

          <h3>Overzicht gekozen data:</h3>
          <span>Dag: {selectedDate.toLocaleDateString()}</span>
          <span>Uur: {selectedDate.toLocaleTimeString()}</span>
        </PickerContainer>
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default DatePickerRange
