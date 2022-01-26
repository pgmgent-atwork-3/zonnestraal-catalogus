import React from 'react'
import styled from 'styled-components';

interface Props {
  
}

const StyledFooter = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.paddings.normal};
  background: ${({ theme }) => theme.colors.lightGrey};
  text-align: center;

  @media (min-width: ${({theme}) => theme.width.tablet}) {
    height: 5rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      margin-right: ${({ theme }) => theme.margins.normal};
    }  
  }
`

const Footer = (props: Props) => {
  return (
    <StyledFooter className="footer">
      <span> Zonnestraal vzw, Kroonstraat 44, 1750 Sint-Kwintens-Lennik</span>
      <span> T. 02/531.01.01</span>
      <span> info@zonnestraalvzw.be</span>
      <span> Rek-nr. BE42 7865 6798 0854</span>
    </StyledFooter>
  )
}

export default Footer;
