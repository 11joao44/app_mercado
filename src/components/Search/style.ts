import { styled } from 'styled-components'
import { color } from '../../styles'

export const SearchStyle = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${color.corText3};
  img {
    width: 32px;
    height: 32px;
  }
`
export const InputStyle = styled.div`
  position: relative;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid ${color.corText3};
  border-radius: 8px;
  width: 100%;
  height: 40px;
  max-width: 480px;
  background-color: #fff;

  cursor: pointer;

  input {
    border: none;
    outline: none;
    width: 75%;
    height: 100%;
    padding: 4px 8px;
    font-size: 16px;
  }
`

export const AbasStyle = styled.div`
  cursor: pointer;
  img {
    margin-top: 120px;
  }
`
export const FiltroStyle = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 4px 0 #000;
  backdrop-filter: blur(10px);
  span {
    h2 {
      margin-bottom: 8px;
    }
  }
`
