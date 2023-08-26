import { styled } from 'styled-components'

export const HeaderStyle = styled.header`
  background-color: rgba(0, 0, 0, 90%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 1;

  h2 {
    color: #fff;
    font-size: 32px;
    letter-spacing: 2px;
    font-family: 'Satisfy', cursive;
  }
`
