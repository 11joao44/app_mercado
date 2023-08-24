import { AddPriceStyle, CampoStyle } from './style'

const Price = () => {
  return (
    <>
      <div>
        <AddPriceStyle>
          <CampoStyle>
            <h3>Produto</h3>
            <p>Arroz</p>
            <h3>Unidade</h3>
            <div>
              <img src="https://img.icons8.com/ios/50/minus.png" alt="minus" />
              <span>1</span>
              <img
                src="https://img.icons8.com/ios/50/plus--v1.png"
                alt="plus--v1"
              />
            </div>

            <label>Preços</label>
            <input type="number" />
            <button>Adicionar</button>
          </CampoStyle>
        </AddPriceStyle>
      </div>
    </>
  )
}

export default Price
