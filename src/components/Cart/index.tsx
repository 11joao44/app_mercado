import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as S from './style'
import { postAPI, useAPI } from '../../hooks/useAPI'
import { closeCart } from '../../store/reducers/lista'
import {
  addToCart,
  removeFromCart,
  removeFromEditedData
} from '../../store/reducers/cart'
import { useEffect } from 'react'

const Cart = () => {
  const items = useAPI()
  const dispatch = useDispatch()
  const { postCartToAPI } = postAPI()

  const { isOpenCart } = useSelector((state: RootReducer) => state.lista)

  // Acessar o estado do componente AddCart
  const { editedData } = useSelector((state: RootReducer) => state.cart)
  const addedToCart = useSelector(
    (state: RootReducer) => state.cart.addedToCart
  )

  // Recuperar os itens do carrinho do localStorage ao montar o componente
  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
    if (cartItemsFromLocalStorage !== null) {
      const parsedCartItems = JSON.parse(cartItemsFromLocalStorage)
      dispatch(addToCart(parsedCartItems))
    }
  }, [dispatch])

  // Atualizar o localStorage sempre que o carrinho for modificado
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(addedToCart))
  }, [addedToCart])

  // Filtrar apenas os produtos que foram adicionados ao carrinho
  const cartItems = items.filter((produto) => addedToCart.includes(produto.id))

  const removeCartItem = (productId: number) => {
    dispatch(removeFromCart(productId))
    dispatch(removeFromEditedData(productId))
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

  const finalizePurchase = async () => {
    // Enviar o carrinho de compras para a API
    try {
      await postCartToAPI(cartItems)
      // Limpar o carrinho de compras após a compra bem-sucedida
    } catch (error) {
      console.error('Erro ao finalizar a compra:', error)
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
          <button onClick={finalizePurchase}>Finalizar compra</button>
        </S.CartStyle>
      </S.Modal>
    </>
  )
}

export default Cart
