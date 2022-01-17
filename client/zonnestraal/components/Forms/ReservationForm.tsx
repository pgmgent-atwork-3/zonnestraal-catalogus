import React from 'react'
import DateRangePicker from '../Agenda/DatePickerRange';
import InputField from './InputField';

interface Props {
  
}

const ReservationForm = (props: Props) => {
  return (
    <form>
      <InputField name='name' label='Reservatie op naam van' placeholder='Jouw naam'/>
      <DateRangePicker/>
    </form>
  )
}

export default ReservationForm
