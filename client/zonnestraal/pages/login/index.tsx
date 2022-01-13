import React, {useState} from 'react';
import { useAuth } from '../../lib/auth';

/* import { LoginForm } from '../../components/Forms';
import { gql, useMutation } from "@apollo/client";
import { AUTH_TOKEN } from '../../lib/constants';
import { PrimaryButton } from '../../components/Buttons'; */

interface Props {
  
}

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const { isSignedIn } = useAuth();

  console.log(isSignedIn())

  function onSubmit(e) {
    e.preventDefault()
    signIn({ email, password })
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
        {!isSignedIn() && <button type="submit">Inloggen</button>}
        {isSignedIn() && <button type="submit">Uitloggen</button>}
        {/* <button type="submit">Sign In</button> */}
      </form>
    </div>
  )
}

export default LoginPage;

