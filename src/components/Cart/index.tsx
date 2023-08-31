import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './style'
import { useAPI } from '../../hooks/useAPI'
import { closeCart, removeItem } from '../../store/redurcers/lista'

const Cart = () => {
  const items = useAPI()
  const dispatch = useDispatch()

  const { isOpenCart } = useSelector((state: RootReducer) => state.lista)

  const editedPrices = useSelector(
    (state: RootReducer) => state.lista.editedPrices
  )

  const editedUnits = useSelector(
    (state: RootReducer) => state.lista.editedUnits
  )

  // Filtrar apenas os produtos que foram adicionados ao carrinho
  const cartItems = items.filter(
    (produto) => editedUnits[produto.id] !== undefined
  )

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  // Calcular o valor total da compra
  const total = cartItems.reduce((acc, produto) => {
    const price = editedPrices[produto.id] || produto.preco
    const unit = editedUnits[produto.id]
    return acc + price * unit
  }, 0)

  const closeCartt = () => {
    dispatch(closeCart())
  }

  const removeCartItem = (productId: number) => {
    dispatch(removeItem(productId))
  }

  return (
    <>
      <S.Modal className={isOpenCart ? 'is-open' : ''}>
        <S.Overlay onClick={closeCartt} />
        <S.CartStyle className={isOpenCart ? 'is-open' : ''}>
          <S.Header>
            <img
              onClick={closeCartt}
              src="https://img.icons8.com/glyph-neue/left-squared.png"
            />
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/external-market-foodies-flaticons-lineal-color-flat-icons-4.png" />
            <a href="#total">
              <img src="https://img.icons8.com/glyph-neue/left-squared.png" />
            </a>
          </S.Header>
          {cartItems.map((produto) => (
            <S.Produto key={produto.id}>
              <S.Foto src={produto.foto} />
              <div>
                <h3>{produto.nome}</h3>
                <p>{formataPreco(editedPrices[produto.id] || produto.preco)}</p>
              </div>
              <p>{editedUnits[produto.id]}x</p>
              <S.Lixeira
                src="https://img.icons8.com/glyph-neue/delete--v1.png"
                onClick={() => removeCartItem(produto.id)} // Chamando a função para remover
              />
            </S.Produto>
          ))}
          <S.Total id="total">Total da Compra: {formataPreco(total)}</S.Total>
        </S.CartStyle>
      </S.Modal>
    </>
  )
}

export default Cart
