import styled, { createGlobalStyle } from 'styled-components'

export const color = {
  corPrincipal: '#f7f7f7',
  corSecundaria: '#fff',
  corTerceira: '#ea1d2c',
  corText1: '#000',
  corText2: '#717171',
  corText3: '#3e3e3e',
  corInput: '#a6a6a6'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: ${color.corSecundaria};
    color: ${color.corText1}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
