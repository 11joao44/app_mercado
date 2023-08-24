import { styled } from 'styled-components'

export const AddPriceStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CampoStyle = styled.div`
  margin: 64px 0;
  max-width: 360px;
  width: 100%;
  height: 360px;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 4px 4px 12px 4px gray;
  flex-direction: column;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;

  p {
    border: 1px solid #000;
    width: 100%;
    text-align: center;
    padding: 4px 0;
    border-radius: 8px;
  }

  input {
    border: 1px solid #000;
    width: 100%;
    text-align: center;
    padding: 4px 0;
    border-radius: 8px;
  }

  label {
    font-size: 16px;
    font-weight: bold;
  }

  button {
    margin: 16px 0;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    transition: all ease-in 0.2s;
    background-color: #000;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    span {
      border: 1px solid #000;
      border-radius: 8px;
      padding: 4px 16px;
    }

    img {
      cursor: pointer;
      width: 32px;
      height: 32px;
    }
  }
`
