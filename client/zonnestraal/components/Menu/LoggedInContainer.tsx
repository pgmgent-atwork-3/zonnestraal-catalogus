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
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};
  z-index: 100;
  height: 5rem;
  padding-left:  ${({ theme }) => theme.paddings.small};

  svg {
    transform: ${({show} ) => (show ? "rotate(0deg)" : "rotate(180deg)")};
    font-size: 1.5rem;
  }

  h3 {
    margin-left:  ${({ theme }) => theme.margins.extraSmall};
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.headline6};
    font-weight: 600;
  }
`

const DetailsUser = styled.div<{show: Boolean}>`
  width: 100%;
  flex-direction: column;
  position: absolute;
  display: ${({ show }) => (show ? "none" : "block")};
  background: ${({ theme }) => theme.colors.yellow};
  padding:  ${({ theme }) => theme.paddings.normal};
  transition: transform 0.5s ease-in-out;
  z-index: 10;

  h4 {
    display: block;
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    display: block;
    transform: ${({ show }) => (show ? "translateY(-16rem)" : "translateY(0)")};
  }

`

const AccountItem = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom:  ${({ theme }) => theme.margins.small};
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
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
        <>
          <Link href={"/admin"}>
            <AccountItem>Overzicht reservaties</AccountItem>
          </Link>
          <Link href={"/admin/fixed"}>
            <AccountItem>Vaste reservaties</AccountItem>
          </Link>
        </>
        }
        <SecondaryButton title="afmelden" onClick={() => signOut()}/>
      </DetailsUser>
    </AccountContainer>
  )
}

export default LoggedInContainer
