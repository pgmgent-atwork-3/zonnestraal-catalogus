import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string,
  label: string,
  ref: string,
  placeholder: string
}

const Input: FC<InputProps> = ({ name, placeholder, label, ...otherProps}, ref) => {

  return (
    <label>
      {label}
      <input
        {...otherProps}
        name={name}
        ref={ref}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;

/* const InputField = React.forwardRef(Input);

export default InputField; */