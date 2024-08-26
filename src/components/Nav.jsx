import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './styled'

const Nav = () => {
  return (
    <>
        <Header>
            <Link to={'/'}>Home</Link>
            <Link to={'/aluno'}>Aluno</Link>
        </Header>
    </>
  )
}

export default Nav