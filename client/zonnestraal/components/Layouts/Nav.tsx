import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface NavProps {
  open: Boolean;
}

const StyledNav = styled.nav`
  position: absolute;
  top: 4rem;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 100;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      margin-bottom: ${({ theme }) => theme.margins.medium};

      &:last-of-type {
        position: relative;
      }

      a {
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSizes.headline5};
        margin: 1rem 2rem;
        transition: all 0.3s ease-in-out;
  
        &:hover {
          color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.width.desktop}) {
  position: relative;
  top: 0;
  width: 60%;
  height: 100%;
  justify-content: start;
  background: ${({ theme }) => theme.colors.lightGrey};
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);

  ul {
    flex-direction: row;
    align-items: center;

    li {
      margin-bottom: 0;
      margin-right: ${({ theme }) => theme.margins.medium};

      &:last-of-type {
        position: absolute;
        right: 0;
      }

      a {
        margin: 0;
        font-size: ${({ theme }) => theme.fontSizes.body};
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

const Nav = ({ open }: NavProps) => {
  return (
    <StyledNav open={open}>
        <ul>
            <li>
                <Link href='/bibliotheek'>Bibliotheek / Mediatheek</Link>
            </li>
            <li>
                <Link href='/voertuigen'>Voertuigen</Link>
            </li>
            <li>
                <Link href='/zalen'>Zalen</Link>
            </li>
            <li>
                <Link href='/login'>Aanmelden</Link>
            </li>
        </ul>
    </StyledNav>
  )
}

export default Nav;
