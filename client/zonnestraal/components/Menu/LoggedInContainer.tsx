import React, { useState } from 'react'
import styled from 'styled-components';
import { FiChevronDown } from "react-icons/fi";
import { SecondaryButton } from '../Buttons';
import { useAuth } from '../../lib/auth';
import Link from 'next/link';


interface Props {
  
}

const AccountContainer = styled.div`
  width: 12rem;
`

const LoggedInHeader = styled.div<{show: Boolean}>`
  display: flex;
  align-items: center;

  svg {
    transform: ${({show} ) => (show ? "rotate(0deg)" : "rotate(180deg)")};
    font-size: 1.5rem;
  }

  h3 {
    margin-left:  ${({ theme }) => theme.margins.extraSmall};
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.headline6};
    font-weight: 600;
  }
`

const DetailsUser = styled.div<{show: Boolean}>`
  display: block;
  width: 100%;
  flex-direction: column;
  position: absolute;
  transform: ${({ show }) => (show ? "translateY(-14rem)" : "translateY(1.7rem)")};
  background: ${({ theme }) => theme.colors.yellow};
  padding:  ${({ theme }) => theme.paddings.normal};
  transition: transform 0.5s ease-in-out;
  z-index: 100;

  h4 {
    display: block;
  }
`

const AccountItem = styled.p`
  color: ${({ theme }) => theme.colors.darkNlue};
  margin-bottom:  ${({ theme }) => theme.margins.small};
  cursor: pointer;
`

const LoggedInContainer = (props: Props) => {
  const [show, setShow] = useState(true);
  const { signOut }:any = useAuth()
  const { isAdmin }:any = useAuth();

  return (
    <AccountContainer>
      <LoggedInHeader show={show}>
        <FiChevronDown onClick={() => setShow(!show)}/>
        <h3>Account</h3>
      </LoggedInHeader>

      <DetailsUser show={show}>
        <Link href={"/mijnreservaties"}>
          <AccountItem>Mijn reservaties</AccountItem>
        </Link>
        {isAdmin() && 
          <Link href={"/admin"}>
            <AccountItem>Overzicht reservaties</AccountItem>
          </Link>
        }
        <SecondaryButton title="afmelden" onClick={() => signOut()}/>
      </DetailsUser>
    </AccountContainer>
  )
}

export default LoggedInContainer
