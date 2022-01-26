import React from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client';
import { createContext, useContext, useState } from 'react';
import jwt_decode from "jwt-decode";
import Router from 'next/router';

const authContext = React.createContext()

export function AuthProvider({children}:any) {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>)
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth(){
  const [authToken, setAuthToken] = useState(null);
  const [CurrentUserId, setCurrentUserId] = useState(null);

  const isAdmin = () => {
    const decodedJWT:any = jwt_decode(authToken!);
    const isAdmin = decodedJWT.isAdmin

    if(isAdmin == true) {
      return true
    } else {
      return false
    }
  }

  const isSignedIn = () => {
    if (authToken) {
      return true
    } else {
      return false
    }
  }

  const getAuthHeaders = () => {
    if(!authToken) return null
    return {
      authorization: `Bearer ${authToken}`,
    }
  }

  const createApolloClient = () => {
    const link = new HttpLink({
      uri: 'http://localhost:5000/graphql',
      headers: getAuthHeaders(),
    })
  
    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  }

  const signOut = () => {
    setAuthToken(null)
    Router.push('/')
  }

  const signIn = async ({ email, password }: {email:string, password:string}) => {
    const client = createApolloClient()

    const LoginMutation = gql`
    mutation login ( $email: String!, $password: String!) {
      login( email: $email, password: $password) {
          id
          access_token,
      }
    }
    `

    const result = await client.mutate({
      mutation: LoginMutation,
      variables: { email, password },
    })

    window.localStorage.setItem("authToken", result.data.login.access_token)

    if (result?.data?.login?.access_token) {
      setAuthToken(result.data.login.access_token)
    } else {
      <p>Verkeerd wachtwoord en/of email</p>
    }

    if (result?.data?.login?.id) {
      setCurrentUserId(result.data.login.id)
    } else 'No user found!'
  }

  return {
    authToken,
    setAuthToken,
    createApolloClient,
    isSignedIn,
    signIn,
    signOut,
    isAdmin
  }
}