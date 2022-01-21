import React, {useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'


interface Props {
  
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NotFoundPage = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <Container>
      <h1>Oepss...</h1>
      <h1>Hier is niets te vinden. Je wordt terug geleid naar de homepage</h1>
    </Container>
  )
}

export default NotFoundPage
