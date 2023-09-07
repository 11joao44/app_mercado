import { styled } from 'styled-components'

export const AddPriceStyle = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 79.2vh;
`
export const CampoStyle = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 4px 4px 12px 4px gray;
  height: 85%;
  width: 85%;

  ul {
    li {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 40px 0;
      width: 100%;
      height: 100%;
      text-align: center;

      button {
        width: 60%;
        margin-bottom: 8px;
      }
    }
  }
`

export const Capa = styled.img`
  width: 100%;
  height: 264px;
  border-radius: 8px;
`

export const Opcao = styled.div`
  margin-top: 16px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const Titulo = styled.h2`
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 8px;
  width: 100%;
`

export const InputLabel = styled.div`
  input {
    padding: 8px;
  }
`

export const ButtonDiv = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  height: 100%;

  button {
    width: 100%;
    margin-bottom: 32px;
  }
`
export const Form = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 48px auto;
  gap: 16px;

  button {
    background-color: #fff;
    opacity: 0.85;
    border-color: #000;
    border-radius: 28px;
    border-style: none;
    text-transform: uppercase;
    font-size: 0.875rem;
    padding: 8px 16px;
    color: #000;
    margin: 32px auto;
    box-shadow:
      0 4px 4px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 4px 5px 0 rgba(0, 0, 0, 0.12);

    &:hover {
      background-color: #000;
      border-color: #fff;
      color: #fff;
    }
  }
`

export const InputLabelAdd = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  input {
    width: 100%;
    text-align: center;
    font-size: 16px;
    background-color: transparent;
    outline: none;
    padding: 12px 4px;
    border: 2px solid #000;
    border-radius: 8px;
  }

  label {
    margin-bottom: 8px;
    display: block;
  }
`

export const InputMoney = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 2px solid #000;
  border-radius: 8px;
  box-shadow:
    0 4px 4px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 4px 5px 0 rgba(0, 0, 0, 0.12);

  input {
    width: 75px;
    text-align: start;
    outline: none;
    border: none;
    font-size: 16px;
  }

  span {
    margin-left: 15px;
  }
`
export const InputCount = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #000;
  border-radius: 8px;
  width: 100%;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  input {
    text-align: center;
    padding: 12px 0;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 16px;
  }

  span {
    font-size: 18px;
    padding: 2px 16px;
    cursor: pointer;
  }
`
export const InputMoneyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow:
    0 4px 4px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 4px 5px 0 rgba(0, 0, 0, 0.12);

  input {
    width: 80px;
    text-align: start;
    outline: none;
    border: none;
    font-size: 16px;
  }

  span {
    margin-left: 15px;
  }
`
