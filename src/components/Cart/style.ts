import styled from 'styled-components'

export const CartStyle = styled.div`
  background-color: red;
  margin: 0 auto;
  height: 100vh;
  width: 10%;
  position: absolute;
  top: 20%;
  color: white;
  display: block;

  &.is-open {
    display: block;
  }
`
