import React from 'react';
import styled from 'styled-components';

type BtnProps = { 
  title: string;
} 

const StyledDeleteBtn = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.lightRed};
  padding: ${({ theme }) => theme.paddings.extraSmall} ${({ theme }) => theme.paddings.small};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: all 0.3s ease;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.red};
  }
`

const DeleteButton: React.FC<BtnProps> = ({ title }) => {
    
  return (
    <StyledDeleteBtn type="submit">
        <span>{title}</span>
    </StyledDeleteBtn>
  )
}

export default DeleteButton;
