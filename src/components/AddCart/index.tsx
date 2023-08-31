import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddPriceStyle, CampoStyle, InputLabel, Titulo } from './style'
import { RootReducer } from '../../store'
import { updatePrices, updateUnits } from '../../store/redurcers/lista'

const AddCart = () => {
  const { produtos } = useSelector((state: RootReducer) => state.lista)
  const dispatch = useDispatch()

  const [editedData, setEditedData] = useState<{
    [productId: number]: { price: number; unit: number }
  }>({})
  const [addedToCart, setAddedToCart] = useState<number[]>([])

  const handleDataChange = (
    productId: number,
    newPrice: number,
    newUnit: number
  ) => {
    setEditedData((prevState) => ({
      ...prevState,
      [productId]: { price: newPrice, unit: newUnit }
    }))
  }

  const handleAddToCart = (productId: number) => {
    const data = editedData[productId]

    if (data) {
      // Atualize o preço e as unidades no estado global antes de enviar para o carrinho
      dispatch(updatePrices({ productId, newPrice: data.price }))
      dispatch(updateUnits({ productId, newUnits: data.unit }))

      // Adicione o produto à lista de produtos no carrinho
      setAddedToCart((prevState) => [...prevState, productId])

      // Limpe o estado local para adicionar outro produto
      setEditedData((prevState) => {
        const newState = { ...prevState }
        delete newState[productId]
        return newState
      })
    }
  }

  const availableProducts = produtos.filter(
    (item) => !addedToCart.includes(item.id)
  )

  return (
    <AddPriceStyle>
      <h2>► Produto Selecionado ◄</h2>

      <CampoStyle>
        <ul>
          {availableProducts.map((item) => (
            <li key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <Titulo>{item.nome}</Titulo>
              <InputLabel>
                <input
                  type="number"
                  value={editedData[item.id]?.price || ''}
                  placeholder="Preço"
                  onChange={(e) =>
                    handleDataChange(
                      item.id,
                      +e.target.value,
                      editedData[item.id]?.unit || item.unidade
                    )
                  }
                />
                <input
                  type="number"
                  value={editedData[item.id]?.unit || ''}
                  placeholder="Unidade"
                  onChange={(e) =>
                    handleDataChange(
                      item.id,
                      editedData[item.id]?.price || item.preco,
                      +e.target.value
                    )
                  }
                />
              </InputLabel>
              <button onClick={() => handleAddToCart(item.id)}>
                Adicionar ao Carrinho
              </button>
            </li>
          ))}
        </ul>
      </CampoStyle>
    </AddPriceStyle>
  )
}

export default AddCart
