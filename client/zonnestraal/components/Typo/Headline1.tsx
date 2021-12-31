import React from 'react'

interface Props {
  title: string
}

const Headline1 = ({title}: Props) => {
  return (
    <h2>{title}</h2>
  )
}

export default Headline1
