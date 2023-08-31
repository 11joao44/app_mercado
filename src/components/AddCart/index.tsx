import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddPriceStyle, CampoStyle } from './style'
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
      <CampoStyle>
        <ul>
          {availableProducts.map((item) => (
            <li key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <input
                  type="number"
                  placeholder="Preço"
                  value={editedData[item.id]?.price || ''}
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
                  placeholder="Unidade"
                  value={editedData[item.id]?.unit || ''}
                  onChange={(e) =>
                    handleDataChange(
                      item.id,
                      editedData[item.id]?.price || item.preco,
                      +e.target.value
                    )
                  }
                />
                <button onClick={() => handleAddToCart(item.id)}>
                  Enviar para o Carrinho
                </button>
              </div>
            </li>
          ))}
        </ul>
      </CampoStyle>
    </AddPriceStyle>
  )
}

export default AddCart
