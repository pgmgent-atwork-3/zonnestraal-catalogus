import React from 'react'
import DateRangePickerDef from '../Agenda/DatePickerDef';
import DateRangePicker from '../Agenda/DatePickerRange';
import InputField from './InputField';

interface Props {
  
}

const ReservationForm = ({ data }:any ) => {
  const bookId = data.serial

  return (
    <form>
      <DateRangePickerDef id={bookId}/>
    </form>
  )
}

export default ReservationForm
