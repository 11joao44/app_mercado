import React from 'react'
import { useAPI } from '../../hooks/useAPI'
import { ListStyle, Modal, Overlay } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/redurcers/lista'

const ProductList: React.FC = () => {
  const items = useAPI()
  const { isOpen } = useSelector((state: RootReducer) => state.lista)

  const dispatch = useDispatch()

  const closeList = () => {
    dispatch(close())
  }

  return (
    <Modal className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeList} />
      <ListStyle>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.id}</span>
              <h2>{item.nome}</h2>
            </li>
          ))}
        </ul>
      </ListStyle>
    </Modal>
  )
}

export default ProductList
