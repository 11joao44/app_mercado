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
              src="https://img.icons8.com/ios/left-squared--v1.png"
            />
            <h2>Carrinho de Compras</h2>
            <a href="#total">TOTAL</a>
          </S.Header>
          {cartItems.map((produto) => (
            <S.Produto key={produto.id}>
              <S.Foto src={produto.foto} />
              <div>
                <h3>Produto: {produto.nome}</h3>
                <p>
                  Preço:
                  {formataPreco(editedPrices[produto.id] || produto.preco)}
                </p>
                <p>Quantidade: {editedUnits[produto.id]} </p>
              </div>
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
