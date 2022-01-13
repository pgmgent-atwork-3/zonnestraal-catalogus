import React, {useState} from 'react';
import { LoginForm } from '../../components/Forms';
import { gql, useMutation } from "@apollo/client";
import { AUTH_TOKEN } from '../../lib/constants';
import { PrimaryButton } from '../../components/Buttons';
import { useAuth } from '../../lib/auth';

interface Props {
  
}

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth()

  function onSubmit(e) {
    e.preventDefault()
    signIn({email, password})
  }


  return (
    <div>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default LoginPage;

