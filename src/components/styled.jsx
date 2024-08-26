import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const Colors = {
    bg1_color: '#61788C',
    bg2_color: '#98A6A2',
    ft_color: '#F2E4D8',
    
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
`

