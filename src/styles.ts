import styled, { createGlobalStyle } from 'styled-components'

export const color = {
  corContainer: '#f7f7f7',
  corFundo: '#ebebeb',
  corText1: '#000',
  corText2: '#717171',
  corText3: '#3e3e3e',
  corInput: '#a6a6a6'
}

export const boxShadow = {
  boxShadow: `
    0 4px 4px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 4px 5px 0 rgba(0, 0, 0, 0.12)
  `
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
    list-style: none;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${color.corFundo};
  }

`
export const Container = styled.div`
  background-color: ${color.corContainer};
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 32px 8px ${color.corText3};
`
