import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const Colors = {
    bg1_color: '#E3CDA4',
    bg2_color: '#7E827A ',
    ft_color: '#EADFDB',
    
}

const {bg1_color, bg2_color, ft_color } = Colors

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const ErrorDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${bg1_color};
`

export const ErrorTitle = styled.h1`
    font-size: 24px;
    text-transform: uppercase;
    background-color: ${bg2_color};
    padding: 50px 20px;
    border-radius: 4px;
    color: ${ft_color};
`

export const Header = styled.header`
    display: flex;
    gap: 2rem;
    justify-content: center;
    background-color: ${bg2_color};
`

export const LinkTitle = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px;
    color: ${bg1_color};
`

export const Main = styled.main`
    background-color: ${bg1_color};
    height: 100vh;
    width: 100%;
`

export const Section = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    background-color: ${bg2_color};
    border-radius: 4px;
`

export const AlunoTitle = styled.h1`
    text-transform: uppercase;
    color: ${ft_color};
`

export const AlunoText = styled.p`
    color: ${ft_color};
`

export const BoldText = styled.strong`
    font-weight: 900;
`

export const HomeTitle = styled.h1`
    text-transform: uppercase;
    color: ${ft_color};
`

export const FooterSection = styled.section`
    background-color: ${bg2_color};
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterText = styled.h5`
    color: ${ft_color};
    text-transform: uppercase;
    text-align: center;

`