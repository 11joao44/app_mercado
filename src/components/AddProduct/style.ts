import styled from 'styled-components'

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

export const InputLabel = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border-radius: 6px;
    font-size: 16px;
    outline: none;
    padding: 8px 16px;
    color: #000;
    text-align: center;
    box-shadow:
      0 4px 4px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 4px 5px 0 rgba(0, 0, 0, 0.12);
  }

  label {
    margin-bottom: 8px;
    display: block;
  }
`
