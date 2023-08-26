import { styled } from 'styled-components'
import { color } from '../../styles'

export const AddPriceStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CampoStyle = styled.div`
  margin: 64px 0;
  max-width: 360px;
  width: 100%;
  height: 480px;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 4px 4px 12px 4px gray;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 32px;

  header {
    width: 100%;
    text-align: center;

    p {
      font-size: 24px;
      padding: 8px 0;
      margin-top: 16px;
      border: 1px solid ${color.corText3};
      width: 100%;
      text-align: center;
      border-radius: 8px;
    }
  }

  button {
    margin: 16px 0;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    transition: all ease-in 0.2s;
    background-color: ${color.corText3};
    color: #fff;
    font-size: 16px;

    &:hover {
      background-color: #fff;
      color: ${color.corText2};
      border: 1px solid ${color.corText3};
    }
  }

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    span {
      border: 1px solid ${color.corText3};
      border-radius: 8px;
      padding: 4px 32px;
      font-size: 32px;
    }

    img {
      cursor: pointer;
      width: 40px;
      height: 40px;
    }
  }
`
export const PriceStyle = styled.div`
  text-align: center;

  input {
    outline: none;
    border: 1px solid #000;
    width: 100%;
    font-size: 24px;
    padding: 8px 0;
    margin-top: 16px;
    border-radius: 8px;
    text-align: center;
  }

  label {
    font-size: 16px;
    font-weight: bold;
  }
`
