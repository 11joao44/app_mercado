import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add } from '../../list/reducers/cart'
import { AddPriceStyle, CampoStyle, PriceStyle } from './style'
import { Produto } from '../../types'

type Props = {
  product: Produto
}

const Price = ({ product }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(product))
  }

  const [count, setCount] = useState(0)

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
              <p>Arroz</p>
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
            <button onClick={addToCart}>Adicionar ao carrinho</button>
          </CampoStyle>
        </AddPriceStyle>
      </div>
    </>
  )
}

export default Price
