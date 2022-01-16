import React, { useState } from 'react';

interface Props {
  name: string,
  value: string,
  label: string,
  placeholder: string,
  onChange?: any,
  onBlur?: any,
  error?: any,
  type?: string
}

const TextField = ({ name, value = "", label, placeholder, onChange, onBlur, error, type = "text" }: Props) => {
  const [ currentValue, setCurrentValue ] = useState(value);

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      label={label}
      value={currentValue}
      onChange= {(e) => {
        if(onChange) onChange(e);
        setCurrentValue(e.currentTarget.value)
      }}
      onBlur={onBlur}
      error={error}
    />
  )
}

export default TextField