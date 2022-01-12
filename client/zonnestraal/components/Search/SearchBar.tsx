import React from 'react'
import styled from 'styled-components'

interface Props {
  type: string
  placeholder: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const StyledInputContainer = styled.div`
input {
  width: 100%;
  margin-bottom: ${({ theme }) => theme.margins.normal};
}  
`

const SearchBar = ({type, placeholder, onChange }: Props )  => {
  return (
    <StyledInputContainer>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </StyledInputContainer>
  )
}

export default SearchBar
