import { useState } from 'react'

import { AddPriceStyle, CampoStyle, PriceStyle } from './style'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const AddCart = () => {
  const [count, setCount] = useState(0)
  const { texto } = useSelector((state: RootReducer) => state.filtro)

  const addUnid = () => {
    setCount(count + 1)
  }

  const removeUnid = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div>
        <AddPriceStyle>
          <CampoStyle>
            <header>
              <h3>Produto</h3>
              <p>{texto}</p>
            </header>

            <main>
              <img
                onClick={removeUnid}
                src="https://img.icons8.com/ios/50/minus.png"
              />
              <span>{count}</span>
              <img
                onClick={addUnid}
                src="https://img.icons8.com/ios/50/plus--v1.png"
              />
            </main>

            <PriceStyle>
              <label>Preços</label>
              <input type="number" />
            </PriceStyle>
            <button>Adicionar ao carrinho</button>
          </CampoStyle>
        </AddPriceStyle>
      </div>
    </>
  )
}

export default AddCart
