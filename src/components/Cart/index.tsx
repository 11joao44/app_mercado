import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import { RootReducer } from '../../store'
import { useAPI } from '../../hooks/useAPI'
import * as C from '../../store/reducers/cart'
import { Historic } from '../../store/types/types'
import { closeCart } from '../../store/reducers/lista'

const Cart = () => {
  const items = useAPI()
  const dispatch = useDispatch()

  const { isOpenCart } = useSelector((state: RootReducer) => state.lista)

  // Acessar o estado do componente AddCart
  const { editedData, addedToCart } = useSelector(
    (state: RootReducer) => state.cart
  )

  // Filtrar apenas os produtos que foram adicionados ao carrinho
  const cartItems = items.filter((produto) => addedToCart.includes(produto.id))
  console.log(cartItems)

  const removeCartItem = (productId: number) => {
    dispatch(C.removeFromCart(productId))
    dispatch(C.removeFromEditedData(productId))
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  // Calcular o valor total da compra
  const total = cartItems.reduce((acc, produto) => {
    const price = editedData[produto.id]?.price || produto.preco
    const unit = editedData[produto.id]?.unit || 1
    return acc + price * unit
  }, 0)

  const closeCartt = () => {
    dispatch(closeCart())
  }

  const registerPurchaseHistory = async () => {
    try {
      // Formatando os dados do histórico de compras
      const historicData: Historic = {
        id: 0,
        date: new Date(),
        products: cartItems,
        totalAmount: total
      }

      // Fazendo uma chamada POST para a API do seu backend
      const response = await axios.post(
        'https://api-mercado.vercel.app/api/historico',
        historicData
      )

      console.log('Histórico de compras registrado com sucesso:', response.data)

      dispatch(C.removeAllFromCart()) // Você precisará criar essa action `removeAllFromCart`
      alert(`O total da sua compra foi de ${formataPreco(total)}`)
      // Lógica adicional, como limpar o carrinho após o registro
    } catch (error) {
      console.error('Erro ao registrar o histórico de compras:', error)
    }
  }

  return (
    <>
      <S.Modal className={isOpenCart ? 'is-open' : ''}>
        <S.Overlay onClick={closeCartt} />
        <S.CartStyle className={isOpenCart ? 'is-open' : ''}>
          <S.Header>
            <img
              onClick={closeCartt}
              src="https://img.icons8.com/glyph-neue/right-squared.png"
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
                <p>
                  {formataPreco(editedData[produto.id]?.price || produto.preco)}
                </p>
              </div>
              <p>{editedData[produto.id]?.unit || 1}x</p>
              <S.Lixeira
                src="https://img.icons8.com/glyph-neue/delete--v1.png"
                onClick={() => removeCartItem(produto.id)} // Chamando a função para remover
              />
            </S.Produto>
          ))}
          <S.Total id="total">Total da Compra: {formataPreco(total)}</S.Total>
          <S.FinalizarCompra onClick={registerPurchaseHistory}>
            Finalizar Compra
          </S.FinalizarCompra>
        </S.CartStyle>
      </S.Modal>
    </>
  )
}

export default Cart
