import { styled } from 'styled-components'

export const SearchStyle = styled.div`
  padding: 16px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const InputStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 8px 4px;
  width: 100%;
  max-width: 480px;
  cursor: pointer;

  input {
    border: none;
    outline: none;
    padding: 4px 8px;
    font-size: 16px;
  }
`

export const AbasStyle = styled.div`
  cursor: pointer;
  img {
    width: 32px;
    height: 32px;
  }
`
