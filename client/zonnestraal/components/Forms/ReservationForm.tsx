import React from 'react'
import DateRangePickerDef from '../Agenda/DatePickerDef';
import DateRangePicker from '../Agenda/DatePickerRange';
import InputField from './InputField';

interface Props {
  
}

const ReservationForm = ({ data }:any ) => {
  console.log(data)

  return (
    <form>
      <DateRangePickerDef id={data}/>
    </form>
  )
}

export default ReservationForm
