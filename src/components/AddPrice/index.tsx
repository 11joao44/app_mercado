import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add } from '../../list/reducers/cart'
import { AddPriceStyle, CampoStyle } from './style'
import { Produto } from '../../types'

type Props = {
  product: Produto
}

const Price = ({product}: Props) => {
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
            <h3>Produto</h3>
            <p>Arroz</p>
            <h3>Unidade</h3>
            <div>
              <img onClick={removeUnid} src="https://img.icons8.com/ios/50/minus.png" alt="minus" />
              <span>{count}</span>
              <img onClick={addUnid}
                src="https://img.icons8.com/ios/50/plus--v1.png"
                alt="plus--v1"
              />
            </div>

            <label>Preços</label>
            <input type="number" />
            <button onClick={addToCart}>Adicionar ao carrinho</button>
          </CampoStyle>
        </AddPriceStyle>
      </div>
    </>
  )
}

export default Price
