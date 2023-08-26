import { styled } from 'styled-components'
import { color } from '../../styles'

export const SearchStyle = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${color.corText3};
`
export const InputStyle = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${color.corText3};
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
    margin-top: 120px;
    width: 32px;
    height: 32px;
  }
`
