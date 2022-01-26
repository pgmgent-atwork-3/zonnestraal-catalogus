import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import LogoPng from '../../public/logo.png'

const LogoContainer = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    margin-right: ${({ theme }) => theme.margins.small};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.headline6};
    font-weight: 400;
    margin-left: ${({ theme }) => theme.margins.extraSmall};
  }


  @media (min-width: ${({ theme }) => theme.width.desktop}) {
    p {
      font-size: ${({ theme }) => theme.fontSizes.headline5};
    }  
  }
`

interface LogoProps {
  title: string;
}

const Logo = ({ title }: LogoProps) => {
  return (
      <Link href='/' >
        <LogoContainer>
          <Image src={LogoPng} height={40} width={40}/>

          <p>{title}</p>
        </LogoContainer>
      </Link>
  )
}

export default Logo;