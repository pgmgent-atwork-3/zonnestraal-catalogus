import React from 'react'
import styled from 'styled-components';

interface Props {
  
}

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background: ${({ theme }) => theme.colors.lightGrey};
`

const Footer = (props: Props) => {
  return (
    <StyledFooter className="footer">
      <p>Zonnestraal vzw, Kroonstraat 44, 1750 Sint-Kwintens-Lennik   |   T. 02/531.01.01   |   info@zonnestraalvzw.be  |  Rek-nr. BE42 7865 6798 0854</p>
    </StyledFooter>
  )
}

export default Footer;
