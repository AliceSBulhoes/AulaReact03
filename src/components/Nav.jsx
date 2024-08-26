import React from 'react'
import { Header, LinkTitle  } from './styled'

const Nav = () => {
  return (
    <>
        <Header>
            <LinkTitle  to={'/'}>Home</LinkTitle >
            <LinkTitle  to={'/aluno'}>Aluno</LinkTitle >
        </Header>
    </>
  )
}

export default Nav