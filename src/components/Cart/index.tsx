import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { CartStyle } from './style'
import { useAPI } from '../../hooks/useAPI'

const Cart = () => {
  const items = useAPI()

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

  return (
    <>
      <CartStyle>
        <h2>Carrinho de Compras</h2>
        {cartItems.map((produto) => (
          <div key={produto.id}>
            <h3>Produto: {produto.nome}</h3>
            <p>
              Preço: {formataPreco(editedPrices[produto.id] || produto.preco)}
            </p>
            <p>Quantidade: {editedUnits[produto.id]}</p>
          </div>
        ))}
        <p>Total da Compra: {formataPreco(total)}</p>
      </CartStyle>
    </>
  )
}

export default Cart
