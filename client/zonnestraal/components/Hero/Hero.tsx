import React from 'react'
import Img from '../public/banner.jpeg';
import styled from 'styled-components';
import Image from 'next/image'

interface Props {
  image?: string;
}

const StyledHero = styled.div`
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% 30%;
`


const Hero = (props: Props) => {
  return (
    <>
      <StyledHero style={{ backgroundImage: 'url("../../public/banner.jpeg")' }}>
        {/* <Image src={img}/> */}
      </StyledHero>
    </>
    )
}

export default Hero;
