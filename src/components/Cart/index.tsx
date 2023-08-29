import { useDispatch, useSelector } from 'react-redux'
import { List, Modal, Overlay, Total } from './style'
import { RootReducer } from '../../list'
import { close } from '../../list/reducers/cart'
import Product from '../Product'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotal = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <Modal className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <List>
        <header>
          <img
            onClick={closeCart}
            src="https://img.icons8.com/ios-filled/circled-chevron-left.png"
          />
          <h2>COMPRAS</h2>
          <img src="https://img.icons8.com/external-soft-fill-juicy-fish/external-cart-ecommerce-soft-fill-soft-fill-juicy-fish-2.png" />
        </header>
        <ul></ul>
        <a href="#total">
          <img src="https://img.icons8.com/ios-filled/50/circled-chevron-down.png" />
        </a>
        <Total id="total">
          <b>
            Valor total: <span>{formataPreco(getTotal())}</span>
          </b>
        </Total>
      </List>
    </Modal>
  )
}

export default Cart
