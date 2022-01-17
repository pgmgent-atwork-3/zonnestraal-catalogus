import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client';
import { createContext, useContext, useState } from 'react';

const authContext = createContext()

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

  console.log(CurrentUserId, authToken);

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

    console.log(result)
    console.log(result.data.login.id)

    if (result?.data?.login?.access_token) {
      setAuthToken(result.data.login.access_token)
    } else 'No acces token!'

    if (result?.data?.login?.id) {
      setCurrentUserId(result.data.login.id)
    } else 'No user found!'
  }

  return {
    setAuthToken,
    createApolloClient,
    isSignedIn,
    signIn,
    signOut,
  }
}