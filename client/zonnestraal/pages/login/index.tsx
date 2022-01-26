import React, {useState} from 'react';
import { useAuth } from '../../lib/auth';
import Image from 'next/image'
import styled from 'styled-components';
import LoginImg from '../../public/login2.jpeg';
import { LoginButton } from '../../components/Buttons';
import Router from 'next/router';


interface Props {
  
}
 
const LoginContainer = styled.div`
  width: 85rem;
  height: calc(100vh - 10rem);
  max-width: 100%;
  padding: ${({ theme }) => theme.paddings.normal};
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    justify-content: space-around;  
    flex-direction: row;
  }
`

const FormContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
  }

  a {
    width: 100%;
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 45%;
    padding:  ${({ theme }) => theme.paddings.big};
  }
`

const ImageContainer = styled.div`
  width: 100%;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 45%;
`


const LoginPage = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signOut, isSignedIn }:any = useAuth();
    
  function onSubmit(e: any) {
    e.preventDefault()
    signIn({ email, password })
    Router.push('/')
  }
  
  return (
    <LoginContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <input 
            type="text" 
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {/* {!isSignedIn() && <button type="submit">Aanmelden</button>}
          {isSignedIn() && <button type="submit">Afmelden</button>} */}
          {!isSignedIn() && <LoginButton title='Aanmelden' type='submit'/>}
          {isSignedIn() && <LoginButton title='Afmelden' onClick={() => signOut()}/>}
        </form>
      </FormContainer>

      <ImageContainer>
        <Image src={LoginImg}/>
      </ImageContainer>
    </LoginContainer>
  )
}

export default LoginPage;

