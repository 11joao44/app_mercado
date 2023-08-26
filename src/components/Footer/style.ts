import { styled } from 'styled-components'

export const FooterStyle = styled.header`
  background-color: rgba(0, 0, 0, 90%);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 1;

  p {
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
    font-family: 'Satisfy', cursive;
  }
`
